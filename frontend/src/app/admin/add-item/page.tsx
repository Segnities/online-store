import AdminTabs from "@/components/AdminTabs"

function AddItem() {
   return (
      <div className="grid grid-flow-row p-8">
         <div className="grid grid-flow-row gap-2">
            <AdminTabs />
         </div>
      </div>
   );
}

export default AddItem;