import Link from "next/link";

import { archives, categories, posts } from "@/config/data";

const Sidebar = () => {
  return (
    <aside>
      <section className="mb-12 font-raleway">
        <h4 className="text-xl mb-2 text-primary leading-heading font-medium">
          Categories
        </h4>
        {categories.map((category) => (
          <div key={category.id}>
            <Link
              href=""
              className="text-base leading-[35px] text-gray-3000 font-medium capitalize"
            >
              {category.category}
            </Link>
          </div>
        ))}
      </section>

      <section className="mb-12 font-raleway">
        <h4 className="text-xl mb-2 text-primary leading-heading font-medium">
          Archives
        </h4>
        {archives.map((archive) => (
          <div key={archive.id}>
            <Link
              href=""
              className="text-base leading-[35px] text-gray-3000 font-medium capitalize"
            >
              {archive.text}
            </Link>
          </div>
        ))}
      </section>

      <section>
        <h4 className="text-xl mb-2 text-primary leading-heading font-medium capitalize font-raleway">
          Recent posts
        </h4>
        {posts.slice(0, 2).map((post) => (
          <div key={post.id} className="mb-8">
            <Link
              href=""
              className="text-base leading-[35px] font-raleway text-primary font-medium capitalize hover:underline transition"
            >
              {post.title}
            </Link>
            <p className="text-gray-3000 font-playfair-display text-sm leading-6 font-normal mt-1">
              {post.body}
            </p>
            <p className="text-sm leading-[35px] text-gray-3000 font-bold font-playfair-display mt-1">
              {post.lastUpdated}
            </p>
          </div>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
