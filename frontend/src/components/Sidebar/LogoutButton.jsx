import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      <button
        onClick={logout}
        className="flex items-center justify-center w-full h-12 text-red-500 "
        disabled={loading}
      >
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            <BiLogOut className="mr-2" />
            Logout
          </>
        )}
      </button>
    </div>
  );
};
export default LogoutButton;
