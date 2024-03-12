import { signOut } from "next-auth/react";
import Swal from "sweetalert2";

export async function handleDeleteAccount(userID) {
  Swal.fire({
    title: "Are you sure?",
    text: "Your account will not be able to be recovered!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch("/api/deleteUser", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userID }),
        });
        if (!response.ok) {
          throw new Error("Failed to delete user account");
        }
        if (response.ok) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Account has been deleted.",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            didClose: () => {
              signOut({ callbackUrl: "http://localhost:3000/" });
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
}
