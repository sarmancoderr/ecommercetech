"use client"
import { CgSortAz } from "react-icons/cg";
import { AppBar } from "../../lib/ui/AppBar";

export function HeaderPage() {
    return (
        <AppBar title="All products" goBack={() => void alert('Yendo atras')}>
            <CgSortAz />
        </AppBar>
    );
}
