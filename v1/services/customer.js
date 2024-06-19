import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCustomers = async () => {
  try {
    const allCustomers = await prisma.customer.findMany();
    return allCustomers;
  } catch (error) {
    throw error;
  }
};
const getSingleCustomer = async (id) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: id,
      },
    });
    return customer;
  } catch (error) {
    throw error;
  }
};
const createCustomer = async (data) => {
  try {
    const customer = await prisma.customer.create({
      data: data,
    });
    return customer;
  } catch (error) {
    throw error;
  }
};
const updateCustomer = async (id, data) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
    return updatedCustomer;
  } catch (error) {
    throw error;
  }
};
const deleteCustomer = async (id) => {
  try {
    const deletedCustomer = await prisma.customer.delete({
      where: {
        id: id,
      },
    });
    return deletedCustomer;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
