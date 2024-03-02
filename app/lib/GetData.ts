
import {userType} from "@/Typescript";
// import db from "@/app/lib/db.mjs";

export async function GetData(){
    const data :any= {
        name: 'lakshay',
        id:25,
        token:"tokentest"
    }

    // const res = await db.query("SELECT * FROM DockerMyqsl.new_table;")
    // console.log(res)
    return ({data})
}