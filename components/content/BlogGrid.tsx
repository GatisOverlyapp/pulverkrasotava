import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: string;
  publishedDate: string;
}

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('lv-LV', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (posts.length === 0) {
    return (
      <section className="bg-pulver-dark section-padding">
        <div className="container text-center">
          <p className="text-pulver-text">Nav pieejamu rakstu.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-pulver-dark section-padding">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/jaunumi/${post.slug}`} className="block">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
                  {post.featuredImage ? (
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-pulver-grey flex items-center justify-center">
                      <svg className="w-12 h-12 text-pulver-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Date */}
                <p className="text-pulver-text text-sm mb-2">
                  {formatDate(post.publishedDate)}
                </p>

                {/* Title */}
                <h3 className="text-pulver-light text-xl font-bold mb-3 group-hover:text-pulver-gold transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-pulver-text line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-pulver-gold mt-4 group-hover:gap-3 transition-all">
                  Lasīt vairāk
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
