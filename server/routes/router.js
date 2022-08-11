const express = require("express");
const bodyparser = require('body-parser');
const router = express.Router();
const users = require("../models/userSchema");
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt");
const { token } = require("morgan");

// Authenticate page 
router.post('/api', (req, res) => {
    res.json('Welcome to the our authenticate  section ')
  })

//   register api

router.post("/register", async (req, res) => {
    // extract data from request
    const { email, username, mobilenumber, age, adress , pass} = req.body;
    //     // console.log(req.body)

    // validate request
    if (!email || !username || !mobilenumber || !age || !adress || !pass ) {
        //     // if (email || username || mobilenumber || age || adress)
        return res.status(404).json(" Please fill  all the data");
    }

    // if request is valid
    try {
        // check if the user already exists
        const preuser = await users.findOne({ email: email });
        console.log(preuser);

        if (preuser) {
             res.status(404).json(" Already Registered");
        } else {
            // register new user
            const adduser = new users({
                email, username, mobilenumber, age, adress,pass
            });
            await adduser.save();
            res.status(201).json(adduser);
            // res.status(201).json(adduser ,{status:true, msg :"  Data matcghed login...."} );
            console.log(adduser)
        }

        // genrate token
        if (adduser !== null ) {
            const token =jwt.sign(users,  { expiresIn: "1d" });
            console.log(token)
            // return res.json({token})
            res.status(200).json( {token : token, msg :" token genrated "} );
        }
        else {
            res.status(400).json("Something went worng");
        }

    }
    catch (error) {
        res.status(404).send(error)
    }

    //     // console.log(req.body);
})

// login user

router.post("/login", async (req, res) => {
    // extract data from request
    const { email,  pass} = req.body;
    //     // console.log(req.body)
    

    // validate request
    if (!email || !pass ) {
        return res.status(404).json("Please fill your login Details ");
    }

    // if request is valid
    try {
        // check if the user already exists
        const preuser = await users.findOne({ email: email });
        const preuserpassword = await users.findOne({ pass:pass });
        console.log(preuser);
        console.log(preuserpassword);

        if (preuser  && preuserpassword) {
             res.status(200).json( {status:true, msg :"  Data matcghed login...."} );
            // const token=  jwt.sign({ users }, { expiresIn: '1d' });
            // console.log(token)
            // return res.json(token)
            // (err, token) => {res.json({token})})
            // res.status(200).json( {status:, msg :"  Data matcghed login...."} );
        } else {
            res.status(404).json("login.... deny");
       
        }
        
    }
    catch (error) {
        res.status(404).send(error)
    }

})

// getdata routes

router.get("/getdata", async (req, res) => {
    try {
        const userdata = await users.find();
       return  res.status(201).json(userdata);
        console.log(userdata)
    } catch (error) {
        res.status(422).send(error)
    }
})


// indivisul user data 


router.get("/getuser/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = (req.params);
        const userindivisual = await users.findById({ _id: id })
        console.log(userindivisual)
        res.status(201).json(userindivisual)
    } catch (error) {
        res.status(422).json(error)
    }
})

// update user data
router.patch("/updateuser/:id", async (req, res) => {
    try {
        console.log(req.params)
        const { id } = (req.params);
        const updateduser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        })
        console.log(updateduser)
        res.status(201).json(updateduser)
    } catch (error) {
        res.status(422).json(error)
    }
})

// delete user
router.delete("/deleteuser/:id", async (req, res) => {
    try {
        // console.log(req.params)
        const {id} = req.params;
        const deleteduser = await users.findByIdAndDelete({_id:id})
        console.log(deleteduser)
        res.status(201).json(deleteduser)
    } catch (error) {
        res.status(422).json(error)
    }
})


// my api 

// router.post('/myapi', (req, res) => {

//     const user = {
//       id: 1,
//       username: "brad",
//       email: "brad@gmail.com"
  
//     }
  
//     jwt.sign({ user }, 'secretkey', { expiresIn: '500s' }, (err, token) => {
//       res.json({
//         token
//       })
//     })
  
//   })

module.exports = router;





















































// // till  999 

// const express = require("express");
// const bodyparser = require('body-parser');
// const router = express.Router();
// const users = require("../models/userSchema");


// // Authenticate page 
// router.post('/api', (req, res) => {
//     res.json('Welcome to the our authenticate  section ')
//   })

// //   register api

// router.post("/register", async (req, res) => {
//     // extract data from request
//     const { email, username, mobilenumber, age, adress , pass} = req.body;
//     //     // console.log(req.body)

//     // validate request
//     if (!email || !username || !mobilenumber || !age || !adress || !pass ) {
//         //     // if (email || username || mobilenumber || age || adress)
//         return res.status(404).json(" Please fill  all the data");
//     }

//     // if request is valid
//     try {
//         // check if the user already exists
//         const preuser = await users.findOne({ email: email });
//         console.log(preuser);

//         if (preuser) {
//              res.status(404).json(" Already Registered");
//         } else {
//             // register new user
//             const adduser = new users({
//                 email, username, mobilenumber, age, adress,pass
                
//             });
//             await adduser.save();
//             res.status(201).json(adduser);
//             console.log(adduser)

//         }
//     }
//     catch (error) {
//         res.status(404).send(error)
//     }

//     //     // console.log(req.body);
// })


// // login user

// router.post("/login", async (req, res) => {
//     // extract data from request
//     const { email,  pass} = req.body;
//     //     // console.log(req.body)

//     // validate request
//     if (!email || !pass ) {
//         return res.status(404).json("Please fill your login Details ");
//     }

//     // if request is valid
//     try {
//         // check if the user already exists
//         const preuser = await users.findOne({ email: email });
//         const preuserpassword = await users.findOne({ pass:pass });
//         console.log(preuser);
//         console.log(preuserpassword);

//         if (preuser  && preuserpassword) {
//              res.status(200).json( {status:true, msg :"  Data matcghed login...."} );
//             // res.status(200).json( {status:, msg :"  Data matcghed login...."} );
//         } else {
//             res.status(404).json("login.... deny");
       
//         }
        
//     }
//     catch (error) {
//         res.status(404).send(error)
//     }

// })




// // getdata routes

// router.get("/getdata", async (req, res) => {
//     try {
//         const userdata = await users.find();
//         res.status(201).json(userdata);
//         console.log(userdata)
//     } catch (error) {
//         res.status(422).send(error)
//     }
// })


// // indivisul user data 


// router.get("/getuser/:id", async (req, res) => {
//     try {
//         console.log(req.params)
//         const { id } = (req.params);
//         const userindivisual = await users.findById({ _id: id })
//         console.log(userindivisual)
//         res.status(201).json(userindivisual)
//     } catch (error) {
//         res.status(422).json(error)
//     }
// })

// // update user data
// router.patch("/updateuser/:id", async (req, res) => {
//     try {
//         console.log(req.params)
//         const { id } = (req.params);
//         const updateduser = await users.findByIdAndUpdate(id, req.body, {
//             new: true
//         })
//         console.log(updateduser)
//         res.status(201).json(updateduser)
//     } catch (error) {
//         res.status(422).json(error)
//     }
// })

// // delete user
// router.delete("/deleteuser/:id", async (req, res) => {
//     try {
//         // console.log(req.params)
//         const {id} = req.params;
//         const deleteduser = await users.findByIdAndDelete({_id:id})
//         console.log(deleteduser)
//         res.status(201).json(deleteduser)
//     } catch (error) {
//         res.status(422).json(error)
//     }
// })



// module.exports = router;



















