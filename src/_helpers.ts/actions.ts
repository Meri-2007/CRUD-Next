    "use server"

    import { redirect } from "next/navigation"
    import { addNewUser, deleteUserById, editUserById } from "./model"
    import { revalidatePath } from "next/cache"
    import EditUser from "@/app/users/edit/[id]/page"

    //menak asinxron fn nnerov
    export const addUser = async (form: FormData) => {
        const name = form.get('name') as string
        const surname = form.get('name') as string
        const age = +(form.get('age') as string)
        const salary = + (form.get('salary') as string)
        await addNewUser({
            name, surname, age, salary
        })

        redirect('/')
        //navigate next i hamar 
    }

    export const deleteUser= async(id:number)=>{
        await deleteUserById(id)
        revalidatePath('/')
    }

    //qani vor  menq iran id n chenq poxancum 
    // ayl inqy stanuma aftomat  
    //bind ov fokus enq  anum
    //kanchelu zhamanak  id  in talis enq  id n 
    export const editUser = async (formData: FormData) => {
        const id = +(formData.get("id") as string);  
        const name = formData.get("name") as string;
        const surname = formData.get("surname") as string;
        const age = +(formData.get("age") as string);
        const salary = +(formData.get("salary") as string);
        
        await editUserById(id, { name, surname, age, salary });  
        redirect("/");
      };