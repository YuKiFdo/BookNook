"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const PopularBooks = () => {
  interface Book {
    id: string;
    title: string;
    author: string;
    imageUrl: string;
    rating: number;
  }

  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/books/popular');
          if (!response.ok) {
            throw new Error('Failed to fetch books');
          }
          const data = await response.json();
          const mappedBooks = data.map((book: { id: string; title: string; authors: string[]; imageLinks?: { thumbnail: string }; averageRating?: number }) => ({
            id: book.id,
            title: book.title,
            author: book.authors[0],
            imageUrl: book.imageLinks?.thumbnail || '/book-placeholder.jpg',
            rating: book.averageRating || 0,
          }));
          setBooks(mappedBooks);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      };

      fetchBooks();
    }, []);


  if (error) {
    return <div className="text-red-500 text-center py-8">Error: {error}</div>;
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-bold text-gray-900 sm:text-2xl">
            POPULAR BOOK THIS WEEK
          </h2>
          <button className="bg-primarybtn border-black/75 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.75)] px-4 py-2 rounded-md text-gray-800 font-semibold text-xs sm:text-base hover:opacity-90">
            Explore More
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg aspect-[2/3] mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {books.map((book) => (
              <div key={book.id} className="group cursor-pointer">
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 160px, 200px"
                  />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">
                  {book.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-sm sm:text-base text-gray-600">{book.author}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1 text-sm sm:text-base">★</span>
                    <span className="text-sm sm:text-base text-gray-700">
                      {book.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularBooks;
