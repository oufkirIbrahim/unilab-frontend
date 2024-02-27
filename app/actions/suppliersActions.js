"use server"

export const insertSupplierAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Supplier inserted successfully" };
};


export const updateSupplierAction = async (formData) => {

  console.log(formData);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { ok: true, message: "Supplier updated successfully" };
}


export const deleteSupplierAction = async (id) => {

  console.log(id);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { ok: true, message: "Supplier deleted successfully" };
}