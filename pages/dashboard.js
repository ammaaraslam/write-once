import Head from "next/head";
import { useRouter } from "next/router";
import ArticleCard from "../components/Dashboard/ArticleCard";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import { GET_ALL_ARTICLES } from "../utils/queries/articles";
import { useQuery } from "@apollo/client";

function Dashboard() {
  const currentRoute = useRouter().asPath;
  const currentPage = currentRoute.includes("drafts")
    ? "Drafts"
    : currentRoute.includes("published")
    ? "Published"
    : "Recently Viewed";
  const { loading, error, data } = useQuery(GET_ALL_ARTICLES);
  const userArticles = data?.articles;
  return (
    <Layout title={currentPage}>
      <Header />
      <Sidebar />

      <main className="bg-[#F7F7F7] dark:bg-[#161616] w-full h-full min-h-screen pl-16 pt-16">
        <div className="pl-10 pt-8">
          <h1 className="font-inter font-bold text-4xl">{currentPage}</h1>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-12 py-10">
          {userArticles?.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              content={article.content}
              isDraft={article.isDraft}
              id={article.id}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default ProtectedRoute(Dashboard);
