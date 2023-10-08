import chatsRoutes from '@/features/chats/routes';
import postsRoutes from '@/features/posts/routes';
import productsRoutes from '@/features/products/routes';
import profilesRoutes from '@/features/profiles/routes';
import searchesRoutes from '@/features/searches/routes';

const privateRoutes = [
  ...postsRoutes,
  ...productsRoutes,
  ...profilesRoutes,
  ...chatsRoutes,
  ...searchesRoutes,
];

export default privateRoutes;
