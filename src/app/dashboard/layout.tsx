import Link from "next/link"

export default function DashboardLayout( {
    children,
}:{
    children: React.ReactNode
} ){
    return (
        <div>
            <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
                <h3 className="text-xl">Logo</h3>
                <ul className="flex items-center gap-6">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                </ul>
            </nav>
            <div className="flex">
                <div className="h-screen bg-black w-[15vw] text-white text-xl">
                    <ul className="p-5 flex flex-col gap-4">
                        <li><Link href="/dashboard"> Dashboard</Link></li>
                        <li><Link href="/dashboard/todos">Todos</Link></li>
                        <li><Link href="/dashboard/users">Users</Link></li>
                        <li><Link href="/dashboard/profile">Profile</Link></li>
                    </ul>

                </div>
                <div className="p-4 max-h-screen overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    )

}