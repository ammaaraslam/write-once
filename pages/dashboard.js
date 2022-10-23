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
import { useEffect, useState } from "react";
import { useAuthenticationStatus } from "@nhost/react";
import { CgSpinner } from "react-icons/cg";

function Dashboard() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const router = useRouter();
  const currentRoute = router.asPath;
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
  const [userArticles, setUserArticles] = useState([]);
  const { isLoading, isAuthenticated } = useAuthenticationStatus();
  useEffect(() => {
    setUserArticles(data?.articles);
  }, [data]);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <Layout title={`${currentPage} | WriteOnce`}>
      <Header />
      <Sidebar
        showSettingsModal={showSettingsModal}
        setShowSettingsModal={setShowSettingsModal}
      />

      <main className="bg-[#F7F7F7] dark:bg-[#161616] w-full h-full min-h-screen pl-16 pt-16">
        <div className="md:pl-10 pl-5 pt-8">
          <h1 className="font-inter font-extrabold tracking-wider md:text-4xl text-2xl">
            {currentPage}
          </h1>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center md:px-12 md:py-10 px-5 py-9">
          {loading ? (
            <div className="mt-5 w-full inline-flex justify-center items-center">
              <CgSpinner className="text-3xl animate-spin" />
            </div>
          ) : userArticles?.length > 0 ? (
            <>
              {userArticles?.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  content={article.content}
                  isDraft={article.isDraft}
                  id={article.id}
                  isPublished={article.isPublished}
                  userArticles={userArticles}
                  setUserArticles={setUserArticles}
                />
              ))}
            </>
          ) : (
            <p className="mt-5 font-inter font-semibold md:text-2xl text-lg text-center tracking-wide">
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

export default Dashboard;
