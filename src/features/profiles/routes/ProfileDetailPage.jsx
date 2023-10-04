import React from 'react';

import PostList from '@/features/posts/components/PostList';
import ProductList from '@/features/products/components/ProductList';

export default function ProfileDetailPage() {
  return (
    <div>
      <section>{/* 프로필 섹션 */}</section>
      <section>
        <ProductList />
      </section>
      <section>
        <PostList postType="user" hasViewController />
      </section>
    </div>
  );
}
