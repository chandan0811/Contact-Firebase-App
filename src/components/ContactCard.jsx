import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";



const ContactCard = ({contact}) => {

    const { onClose,onOpen,isOpen } = useDisclouse();

 
    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contact" ,id));
            toast.success("Contact deleted Successfully")
        } catch (error) {
            
            console.log(error);
        }
    };
    
  return (
    <>
    <div
  key={contact.id} className="bg-yellow  flex justify-between items-center p-2 rounded-lg">
<div className="flex gap-2">
<HiOutlineUserCircle className="text-orange text-4xl" />
<div className="">
 <h2 className="font-medium">{contact.name}</h2>
 <p className="text-sm">{contact.email}</p>
</div>
</div>
<div className="flex text-3xl ">
<IoMdTrash onClick={() => deleteContact(contact.id) } className="text-orange cursor-pointer"/>
<RiEditCircleLine onClick={onOpen}
className="cursor-pointer"
/>

</div>
 </div>
 <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
 </>
  )
    
  
}

export default ContactCard;