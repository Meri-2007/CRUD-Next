//databas i het ashxatanqneri fayl
import Database from "better-sqlite3";
import { InputUser, IUser } from "./types";
 const sql=new Database("crud.db")//talis enq eli crud db n u qani forinqy arden ka el chi stexcvum ayl connecta linum
 export const getAllUsers=()=>{
    return sql.prepare (`SELECT *FROM users`).all() as IUser[]//ete uzum enq tvyalner stanal kanchum enq all y ete mi hat get y
 }

//  getAllUsers=async():Promise<IUser[]>=>{
//     return sql.prepare("Select * from usesrs").all() as IUser[]
//  } nuyny Promise ov bayc mast chka vorovhetev Promisov chi shxatum bayc standarty paheu hamar karanq grenq

export const addNewUser=(user:InputUser)=>{
    const stm=`INSERT INTO users (name,surname,age,salary)
                VALUES(@name,@surname,@age,@salary)
    `
    return sql.prepare(stm).run(user)
}
//preapare naxapatrastuma vorpesi harcumy texi unena
//heto kanchum eqn run 
//bolor mutate anx hramannery run ov enq kanchum
//erb vor shnikner enq dnum mer tvac obyektic
// inqy hamapatasxan anunov dashtery dnuma @ neri texy

export const deleteUserById=async(id:number)=>{
    const stm=`DELETE FROM users WHERE id=?`
    return sql.prepare(stm).run(id)
}
//? enq  dnum  run i uxarkacy gnuma harcakani poxaren hertov
//ete eli haracakan liner 2 rd run i argumenty kpoxacnver  2 rd harcakanain
export const getUserById=(id:number)=>{
    return sql.prepare (`SELECT * FROM users WHERE id=?`).get(id) as IUser
}
export const editUserById = (id: number, user: InputUser) => {
    const stm = `
      UPDATE users
      SET name = @name,
          surname = @surname,
          age = @age,
          salary = @salary
      WHERE id = @id
    `;
    return sql.prepare(stm).run({ ...user, id });  
  };