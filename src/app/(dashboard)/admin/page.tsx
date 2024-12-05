import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


const page =async () => {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return <h2 className="text-4xl text-center">Welcome to Admin {session?.user.username || session.user.name}</h2>
    }
    return <h2 className="text-2xl text-center ">Please login  to see this admin page</h2>
};
export default page;