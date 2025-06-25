import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftAside from "../components/layoutComponents/leftAside";
import RightAside from "../components/layoutComponents/RightAside";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto ">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <NavBar></NavBar>
            </nav>
            <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-4 my-4">
            <aside className="col-span-3">
                <LeftAside></LeftAside>
            </aside>
            <main className="col-span-6">
                main content
            </main>
            <aside className="col-span-3">
                <RightAside></RightAside>
            </aside>

            </main>
        </div>
    );
};

export default HomeLayout;