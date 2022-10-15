import Head from "next/head";
import { useRouter } from "next/router";
import ArticleCard from "../components/Dashboard/ArticleCard";
import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";
import Layout from "../components/Layout";
import ProtectedRoute from "../components/ProtectedRoute";

function Dashboard() {
  const currentRoute = useRouter().asPath;
  const currentPage = currentRoute.includes("drafts")
    ? "Drafts"
    : currentRoute.includes("published")
    ? "Published"
    : "Recently Viewed";
  return (
    <Layout title={currentPage}>
      <Header />
      <Sidebar />

      <main className="bg-[#F7F7F7] dark:bg-[#161616] w-full h-full min-h-screen pl-16 pt-16">
        <div className="pl-10 pt-8">
          <h1 className="font-inter font-bold text-4xl">{currentPage}</h1>
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center px-12 py-10">
          <ArticleCard />
        </div>
      </main>
    </Layout>
  );
}

export default ProtectedRoute(Dashboard);
