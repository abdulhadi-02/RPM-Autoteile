import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// مكوّن بسيط لحماية الصفحات الخاصة
// إذا كان المستخدم مسجل دخول يعرض children
// غير ذلك يحوّل إلى صفحة تسجيل الدخول
function PrivateRoute({ children }) {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;