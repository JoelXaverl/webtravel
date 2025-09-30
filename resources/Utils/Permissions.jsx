import { usePage } from "@inertiajs/react";

export default function hasAnyPermission(permissions) {
   // destruct auth from usepage props
   const { auth } = usePage().props

    // get all permissions from props auth, untuk mendapatkan semua data permission-nya dari user yg login
   let allPermissions = auth.permissions;

    // define has permission is false, kalo gk punya permission berarti false
    let hasPermission = false; // alasan ini pake let karena defaultnya false dan karena pake "let" kita bisa isi value-nya diganti jadi "true"

    permissions.forEach(function(item){
        // do it if permission is match with key
        if(allPermissions[item]) // apakah dia memiliki semua permission dari "item"
        //assign hasPermission to true
        hasPermission = true;
    });

    return hasPermission
}

