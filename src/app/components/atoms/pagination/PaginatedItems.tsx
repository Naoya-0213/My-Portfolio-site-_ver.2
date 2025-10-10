// app/components/PaginatedItems.tsx

"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";

// app/components/PaginatedItems.tsx

// データの型（今回は仮置き）
type Post = {
  id: number;
  title: string;
};

type PaginatedItemsProps = {
  items: Post[]; // ページネーション対象の配列
  itemsPerPage: number; // 1ページあたりの件数
};

export function PaginatedItems({ items, itemsPerPage }: PaginatedItemsProps) {
  const [itemOffset, setItemOffset] = useState(0);

  // 表示範囲を計算
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);

  // 総ページ数
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // ページ切り替え時の処理
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* 投稿リスト */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {currentItems.map((post) => (
          <div key={post.id} className="rounded border p-4">
            {post.title}
          </div>
        ))}
      </div>

      {/* ページネーションUI */}
      <div className="mt-6 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          // ===== css =====
          containerClassName="flex items-center gap-2 justify-center" // 全体を横並び中央
          pageLinkClassName="" // 各ページ番号
          activeLinkClassName="" // アクティブページ
          previousLinkClassName="" // < previous
          nextLinkClassName="" // next >
        />
      </div>
    </>
  );
}
