function ProtectedRoute({ children, role }) {
  const { auth } = useAuth();

  // Comentar o eliminar esta condición para eliminar temporalmente la protección
  if (!auth) {
      return children; // Permitir acceso sin autenticación
  }

  // Si tienes una verificación de rol, también puedes comentarla
  if (role && auth.role !== role) {
      return <Navigate to="/" />;
  }

  return children;
}
