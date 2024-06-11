import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
    return (
        <div>
            <Appbar />
            <Balance value={10000} />
            <Users />
        </div>
    )
}