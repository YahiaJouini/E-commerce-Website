import LoginForm from "../Components/LoginForm";

export default function LoginPage() {
    // to fix the position inheritance when using useNavigate
    window.scrollTo(0, 0)
    return (
        <div className="container h-[50vh]">
            <div className="w-[50%] bg-gradient-to-r from-[#e5e7eb] to-[#edeef1] 
                            m-auto mt-20 py-10 px-8 rounded-lg search-shadow">
                <LoginForm title="Login to your account" />
            </div>
        </div>
    )
}
