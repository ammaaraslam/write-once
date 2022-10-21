import Head from "next/head";
import { useRouter } from "next/router";
import ArticleCard from "../components/Dashboard/ArticleCard";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import {
  GET_ALL_ARTICLES,
  GET_ALL_DRAFTS,
  GET_ALL_PUBLISHED_ARTICLES,
} from "../utils/queries/articles";
import { useQuery } from "@apollo/client";
import SettingsModal from "../components/Dashboard/SettingsModal";
import { useState } from "react";

function Dashboard() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const currentRoute = useRouter().asPath;
  const currentPage = currentRoute.includes("drafts")
    ? "Drafts"
    : currentRoute.includes("published")
    ? "Published"
    : "Recently Viewed";
  const { loading, error, data } = useQuery(
    currentPage === "Drafts"
      ? GET_ALL_DRAFTS
      : currentPage === "Published"
      ? GET_ALL_PUBLISHED_ARTICLES
      : GET_ALL_ARTICLES
  );
  const userArticles = data?.articles;
  return (
    <Layout title={currentPage}>
      <Header />
      <Sidebar
        showSettingsModal={showSettingsModal}
        setShowSettingsModal={setShowSettingsModal}
      />

      <main className="bg-[#F7F7F7] dark:bg-[#161616] w-full h-full min-h-screen pl-16 pt-16">
        <div className="pl-10 pt-8">
          <h1 className="font-inter font-extrabold tracking-wider text-4xl">
            {currentPage}
          </h1>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-12 py-10">
          {userArticles?.length > 0 ? (
            <>
              {userArticles?.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  content={article.content}
                  isDraft={article.isDraft}
                  id={article.id}
                />
              ))}
            </>
          ) : (
            <p className="font-inter font-semibold text-2xl tracking-wide">
              You Currently Have No Articles
            </p>
          )}
        </div>
      </main>
      <SettingsModal
        opened={showSettingsModal}
        onClose={() => setShowSettingsModal(false)}
      />
    </Layout>
  );
}

export default ProtectedRoute(Dashboard);
