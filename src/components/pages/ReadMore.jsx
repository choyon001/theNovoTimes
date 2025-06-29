import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header";
import RightAside from "../layoutComponents/RightAside";
import { IoMdArrowRoundBack } from "react-icons/io";

const ReadMore = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log("readmore", news);
  const {image_url,title,details,
category_id}= news;
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <div className="w-11/12 mx-auto grid md:grid-cols-12 gap-4 my-4">
        <section className="col-span-9">
          <h1 className="font-semibold">Novo News</h1>

          <div className="card bg-base-100 border border-base-300 ">
            <figure className="px-10 pt-10">
              <img
                src={image_url}
                alt="Shoes"
                className="rounded-none"
              />
            </figure>
            <div className="card-body items-start  px-10 pt-10">
              <h2 className="card-title">{title}</h2>
              <p>{details}</p>
              <div className="card-actions">
                <Link to={`/category/${category_id}`} className="btn btn-error"><IoMdArrowRoundBack/> All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </div>
    </div>
  );
};

export default ReadMore;
