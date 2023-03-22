const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../data/database");
const { ObjectID } = require("bson");
const session = require("express-session");

router.get("/404", function (req, res) {
  res.render("includes/404");
});

router.get("/login/student", function (req, res) {
  if (req.session && req.session.user) {
    return res.redirect("/semester");
  }
  res.render("student");
});

router.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

// router.get("/login/admin", function (req, res) {
//   res.render("subjects");
// });
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.post("/student", async function (req, res) {
  const enteredUser = req.body.login_id;
  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: enteredUser });
  const enteredPassword = req.body.login_password;
  if (req.session && req.session.user) {
    return res.redirect("/semester");
  }
  // const hashPassword = await bcrypt.hash(enteredPassword, 12);

  const admin = "student";
  if (!loginDetails) {
    return res.redirect("/login");
  }
  if (enteredPassword != loginDetails.password) {
    return res.redirect("/login");
  }
  if (admin != loginDetails.adminType) {
    return res.redirect("/login");
  }

  req.session.user = { id: loginDetails._id, email: loginDetails.userId };
  req.session.isAuthendicated = "true";
  req.session.save(function () {
    res.redirect("/semester");
  });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/semester", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login/student");
  }
  
  const sessionUser = await req.session.user;

  const loginDetails = await db
     .getDb()
     .collection("login_database")
     .findOne({ userId: sessionUser.email });
  if(loginDetails.adminType!=='student'){
    res.redirect('/')
  }
  // const userDepartment = loginDetails.department;
  // const userSubjects = await db
  //   .getDb()
  //   .collection("semester_subjects")
  //   .findOne({ department: userDepartment });

  res.render("semester_page");
});

// ---------------semester-------------------------------------
router.get("/semester1/subjects", async function (req, res) {
  const sessionUser = await req.session.user;

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const userDepartment = loginDetails.department;
  const userSubjects = await db
    .getDb()
    .collection("semester_subjects")
    .findOne({ department: userDepartment, semester: "semester1" });
  const semesterId = userSubjects._id;
  const userSem = userSubjects.subjects;
  // for (const user in userSem) {
  //   console.log(userSem[user]);
  // }

  // console.log(semesterId);

  res.render("subject", { userSem: userSem, semesterId: semesterId });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/semester2/subjects", async function (req, res) {
  const sessionUser = await req.session.user;

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const userDepartment = loginDetails.department;
  const userSubjects = await db
    .getDb()
    .collection("semester_subjects")
    .findOne({ department: userDepartment, semester: "semester2" });
  const semesterId = userSubjects._id;
  const userSem = userSubjects.subjects;
  // for (const user in userSem) {
  //   console.log(userSem[user]);
  // }

  //console.log(userSubjects);

  res.render("subject", { userSem: userSem, semesterId: semesterId });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/semester3/subjects", async function (req, res) {
  const sessionUser = await req.session.user;

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const userDepartment = loginDetails.department;
  const userSubjects = await db
    .getDb()
    .collection("semester_subjects")
    .findOne({ department: userDepartment, semester: "semester3" });
  const semesterId = userSubjects._id;
  const userSem = userSubjects.subjects;
  // for (const user in userSem) {
  //   console.log(userSem[user]);
  // }

  //console.log(semesterId);

  res.render("subject", { userSem: userSem, semesterId: semesterId });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/semester4/subjects", async function (req, res) {
  const sessionUser = await req.session.user;

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const userDepartment = loginDetails.department;
  const userSubjects = await db
    .getDb()
    .collection("semester_subjects")
    .findOne({ department: userDepartment, semester: "semester4" });
  const semesterId = userSubjects._id;
  const userSem = userSubjects.subjects;
  // for (const user in userSem) {
  //   console.log(userSem[user]);
  // }

  // console.log(semesterId);

  res.render("subject", { userSem: userSem, semesterId: semesterId });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/semester5/subjects", async function (req, res) {
  const sessionUser = await req.session.user;

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const userDepartment = loginDetails.department;
  const userSubjects = await db
    .getDb()
    .collection("semester_subjects")
    .findOne({ department: userDepartment, semester: "semester5" });
  const semesterId = userSubjects._id;
  const userSem = userSubjects.subjects;
  // for (const user in userSem) {
  //   console.log(userSem[user]);
  // }

  // console.log(semesterId);

  res.render("subject", { userSem: userSem, semesterId: semesterId });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/semester6/subjects", async function (req, res) {
  const sessionUser = await req.session.user;

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const userDepartment = loginDetails.department;
  const userSubjects = await db
    .getDb()
    .collection("semester_subjects")
    .findOne({ department: userDepartment, semester: "semester6" });
  const semesterId = userSubjects._id;
  const userSem = userSubjects.subjects;
  // for (const user in userSem) {
  //   console.log(userSem[user]);
  // }

  // console.log(semesterId);

  res.render("subject", { userSem: userSem, semesterId: semesterId });
});

// --------------------------------------------------------
router.get("/sem_subjects/:id/:sub", async function (req, res) {
  const postId = req.params.id;

  const postSubject = req.params.sub;
  const userSubjects = await db
    .getDb()
    .collection("semester_subjects")
    .findOne({ _id: ObjectID(postId) });
  const subjectDepartment = userSubjects.department;
  const subjects = await db
    .getDb()
    .collection("subject_units")
    .findOne({ department: subjectDepartment }, { subject: postSubject });

  const subjectUnits = subjects.units;

  res.render("sem_units", {
    subjectDepartment: subjectDepartment,
    subjectName: postSubject,
    subjectUnits: subjectUnits,
  });
});

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get(
  "/sem_subjects/:id/:unit/:department/:subject",
  async function (req, res) {
    const unit = String(req.params.unit);
    const department = req.params.department;
    const subject = req.params.subject;
    const fetchSubject = await db
      .getDb()
      .collection("subject_units")
      .findOne({ subjectName: subject }, { department: department });
    const content = fetchSubject.contents;
    let unitContent = null;
    if (unit === "Unit1") {
      unitContent = content.Unit1;
    } else if (unit === "Unit2") {
      unitContent = content.Unit2;
    } else if (unit === "Unit3") {
      unitContent = content.Unit3;
    } else if (unit === "Unit4") {
      unitContent = content.Unit4;
    } else if (unit === "Unit5") {
      unitContent = content.Unit5;
    }
    const pdf = unitContent.pdf;
    // console.log(subject);
    // console.log(fetchSubject);
    // console.log(content);
    // console.log(pdf);
    res.render("content", {
      pdf: pdf,
      unit: unit,
      department: department,
      subject: subject,
    });
  }
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/video/:unit/:department/:subject", async function (req, res) {
  const unit = String(req.params.unit);
  const department = req.params.department;
  const subject = req.params.subject;
  const fetchSubject = await db
    .getDb()
    .collection("subject_units")
    .findOne({ subjectName: subject }, { department: department });

  const contents = fetchSubject.contents;
  var unitContent = null;
  if (unit === "Unit1") {
    unitContent = contents.Unit1;
  } else if (unit === "Unit2") {
    unitContent = contents.Unit2;
  } else if (unit === "Unit3") {
    unitContent = contents.Unit3;
  } else if (unit === "Unit4") {
    unitContent = contents.Unit4;
  } else if (unit === "Unit5") {
    unitContent = contents.Unit5;
  }
  const video = unitContent.video;
  res.render("video", { video: video });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/podcast/:unit/:department/:subject", async function (req, res) {
  const unit = String(req.params.unit);
  const department = req.params.department;
  const subject = req.params.subject;
  const fetchSubject = await db
    .getDb()
    .collection("subject_units")
    .findOne({ subjectName: subject }, { department: department });
  const contents = fetchSubject.contents;
  var unitContent = null;
  if (unit === "Unit1") {
    unitContent = contents.Unit1;
  } else if (unit === "Unit2") {
    unitContent = contents.Unit2;
  } else if (unit === "Unit3") {
    unitContent = contents.Unit3;
  } else if (unit === "Unit4") {
    unitContent = contents.Unit4;
  } else if (unit === "Unit5") {
    unitContent = contents.Unit5;
  }
  const audio = unitContent.audio;

  res.render("podcast");
});
router.get("/login/admin",async function (req, res) {
  
  if (req.session && req.session.user) {
    const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: req.session.user.email });
    console.log(loginDetails)
    if(loginDetails.adminType=='faculty'){
      return res.redirect('/admin/acess')
    }
    else if(loginDetails.adminType=='main'){
      return res.redirect('/mainadmin')
    }
    else{
      return res.redirect("/");
    }
  }
  // if(loginDetails.adminType=='student'){
  //   return res.redirect('/')
  // }
  res.render("admin-login");
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.post("/admin/login", async function (req, res) {
  const enteredUser = req.body.login_id;
  const enteredPassword = req.body.login_password;

  if (req.session && req.session.user) {
    return res.redirect("/admin/acess");
  }
  // const hashPassword = await bcrypt.hash(enteredPassword, 12);

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: enteredUser });
  const admin = "student";
  if (!loginDetails) {
    return res.redirect("/login");
  }
  if (enteredPassword != loginDetails.password) {
    return res.redirect("/login");
  }
  if (admin === loginDetails.adminType) {
    return res.redirect("/login");
  }

  req.session.user = { id: loginDetails._id, email: loginDetails.userId };
  req.session.isAuthendicated = "true";
  if (loginDetails.adminType == "main") {
    return res.redirect("/mainadmin");
  }
  res.redirect("/admin/acess");
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/admin/acess", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }
  const sessionUser = req.session.user;
  const email = await sessionUser.email;
  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: email });
  const department = loginDetails.department;
  const students = await db
    .getDb()
    .collection("login_database")
    .find({ department: department, adminType: "student" })
    .toArray();

  res.render("admin_control", { students: students });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/edit/admin/:userId", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }
  const stu_id = req.params.userId;
  const user = await db
    .getDb()
    .collection("login_database")
    .findOne({ _id: ObjectID(stu_id) });

  // const students = await db
  //   .getDb()
  //   .collection("login_database")
  //   .find({})
  //   .toArray();
  res.render("edituser", { user: user });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.post("/delete/:id", async function (req, res) {
  const uid = req.params.id;
  const deleting = await db
    .getDb()
    .collection("login_database")
    .deleteOne({ _id: new ObjectID(uid) });
  res.redirect("/admin/acess");
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/cancelReturn", function (req, res) {
  res.redirect("/admin/acess");
});
router.post("/adminEdited/:Id", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }
  // const sessionuserDetails = req.session.user;

  const stu_id = req.params.Id;
  // const sessionuser = await db
  //   .getDb()
  //   .collection("login_database")
  //   .findOne({ userId: sessionuserDetails.email });

  const name = req.body.name;
  const userId = req.body.userId;
  const password = req.body.password;

  //let emailStore = [];
  const users = await db
    .getDb()
    .collection("login_database")
    .find({})
    .toArray();

  for (iii in users) {
    // if (user)
    // if (users[iii].userId === userId || users[iii].userId != userId) {
    //   return res.render("includes/404");
    // }
    //  if (users[iii].userId === userId) {
    //    return res.render("includes/404");
    //  }
    // if (user === userId) {
    //   console.log("hi");
    //}
  }
  // ---------------------------------------------------------------------------
  // ---------------------------------------------------------------------------
  const user = await db
    .getDb()
    .collection("login_database")
    .updateOne(
      { _id: new ObjectID(stu_id) },
      { $set: { password: password, userId: userId, name: name } }
    );

  res.redirect("/admin/acess");
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/admin/useradd", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }

  const sessionUser = await req.session.user;

  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const adminType = loginDetails.adminType;

  res.render("adduserForm", { adminType: req.params.adminType });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.post("/admin/useradd", async function (req, res) {
  const sessionUser = await req.session.user;
  const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: sessionUser.email });

  const update = await db.getDb().collection("login_database").insertOne({
    name: req.body.name,
    userId: req.body.userId,
    password: req.body.password,
    adminType: "student",
    department: loginDetails.department,
  });
  res.redirect("/admin/acess");
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/mainadmin", async function (req, res) {

  if (req.session && req.session.user) {
    const loginDetails = await db
    .getDb()
    .collection("login_database")
    .findOne({ userId: req.session.user.email });
    if(loginDetails.adminType!=='main'){
      res.redirect('/')
    }
  }
  const users = await db
    .getDb()
    .collection("login_database")
    .find({})
    .toArray();
  let department = [];
  for (iii in users) {
    if (users[iii].department == "all" || department.includes(users[iii].department)) {
      continue;
    }
    department.push(users[iii].department);
  }

  console.log(department);

  res.render("mainadmin", { department: department });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/:department/control/mainadmin", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }

  const loginDetailsFaculty = await db
    .getDb()
    .collection("login_database")
    .find({ department: req.params.department, adminType: "faculty" })
    .toArray();
  const loginDetailsStu = await db
    .getDb()
    .collection("login_database")
    .find({ department: req.params.department, adminType: "student" })
    .toArray();
  res.render("mainAdminControl", {
    facultys: loginDetailsFaculty,
    students: loginDetailsStu,
  });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/mainadmin/edit/:userId", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }

  const stu_id = req.params.userId;
  const user = await db
    .getDb()
    .collection("login_database")
    .findOne({ _id: ObjectID(stu_id) });

  // const students = await db
  //   .getDb()
  //   .collection("login_database")
  //   .find({})
  //   .toArray();
  res.render("mainAdminEditForm", { user: user });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.post("/mainadmin/edit/:userId/:department", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }
  const sessionuserDetails = req.session.user;

  const stu_id = req.params.userId;
  const onuser = await db
    .getDb()
    .collection("login_database")
    .findOne({ _id: new ObjectID(stu_id) });
  console.log(onuser);
  const name = req.body.name;
  const userId = req.body.userId;
  const password = req.body.password;

  //let emailStore = [];
  const users = await db
    .getDb()
    .collection("login_database")
    .find({})
    .toArray();

  for (iii in users) {
    // if (user)
    if (users[iii].userId === userId) {
      return res.redirect("/404");
    }
  }

  const user = await db
    .getDb()
    .collection("login_database")
    .updateOne(
      { _id: new ObjectID(stu_id) },
      { $set: { password: password, userId: userId, name: name } }
    );
  res.redirect(`/${onuser.department}/control/mainadmin`);
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/mainadmin/add/:adminType/:department", function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }

  res.render("mainAdminAddForm", {
    adminType: req.params.adminType,
    department: req.params.department,
  });
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.post("/:adminType/:department/mainadmin/add", async function (req, res) {
  if (!req.session.isAuthendicated) {
    return res.redirect("/login");
  }
  const redirectFinder = req.params.department;

  const update = await db.getDb().collection("login_database").insertOne({
    name: req.body.name,
    userId: req.body.userId,
    password: req.body.password,
    adminType: req.params.adminType,
    department: redirectFinder,
  });

  res.redirect(`/${redirectFinder}/control/mainadmin`);
});

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
router.get("/mainadmin/delete/:id", async function (req, res) {
  const uid = req.params.id;

  const finddep = await db
    .getDb()
    .collection("login_database")
    .findOne({ _id: new ObjectID(uid) });
  const deleting = await db
    .getDb()
    .collection("login_database")
    .deleteOne({ _id: new ObjectID(uid) });
  res.redirect(`/${finddep.department}/control/mainadmin`);
});

router.get("/cancel/:department", function (req, res) {
  const department = req.params.department;
  res.redirect(`/${department}/control/mainadmin`);
});
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
let globalQusAns = null;
// --------------------------------------------------------------------------------------

router.get("/quiz/:department/:subject", async function (req, res) {
  const findquiz = await db.getDb().collection("quiz").findOne({
    department: req.params.department,
    subjectName: req.params.subject,
  });

  const department = req.params.department;
  const subjectName = req.params.subject;
  const quiz = findquiz.quiz;
  const quizLength = 5
  let randomNumbers = [];
  const quizArray = Object.values(quiz);
  while (randomNumbers.length < quizLength) {
    let randomNum = Math.floor(Math.random() * quizLength) + 1;
    if (!randomNumbers.includes(randomNum)) {
      randomNumbers.push(randomNum);
    }
  }

  let randomQuestions = [];
  for (random of randomNumbers) {
    randomQuestions.push(quizArray[random - 1]);
  }

  globalQusAns = randomQuestions;
  // -------------------------------------foroptions

  let randomquiznums = [];
  while (randomquiznums.length <= 3) {
    let randomNums = Math.floor(Math.random() * 4) + 1;
    if (!randomquiznums.includes(randomNums)) {
      randomquiznums.push(randomNums);
    }
  }
  let summa = 1;

  // console.log(randomquiznums);
  res.render("quiz", {
    randomQuestions: randomQuestions,
    randomquiznums: randomquiznums,
    summa: summa,
    department: department,
    subjectName: subjectName,
  });
});

// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

router.post("/quiz/:department/:subject", async function (req, res) {
  const received = Object.entries(req.body);
  const question = [];
  const answerReceived = [];

  for (receive of received) {
    question.push(receive[0]);
  }
  for (receive of received) {
    answerReceived.push(receive[1]);
  }
  let correctAnswerCount = 0;
  let temp=0
  for (global of globalQusAns) {
    if (global.answer == answerReceived[temp]) {
      correctAnswerCount += 1;
    }
    temp+=1
    // globalAnswerForVeiw.push(temp);
  }

  answres = answerReceived;
  globCorrectanswer = correctAnswerCount;
  //console.log(globalQusAns);

  res.redirect(`/result/${req.params.department}/${req.params.subject}`);
});
var globCorrectanswer = 0;
var globalAnswerForVeiw = [];
var answres = [];
// =========================================================================
router.get("/result/:department/:subject", function (req, res) {
  res.render("quizResult", {
    globCorrectanswer: globCorrectanswer,
    department: req.params.department,
    subject: req.params.subject,
  });
});

router.post("/result/:department/:subject", function (req, res) {
  res.redirect(`/quiz/${req.params.department}/${req.params.subject}`);
});
router.post('/back',function(req,res){
  res.redirect('/')
})
// ============================================================
router.get('/about',function(req,res){
  res.render('about')
})
router.get('/contact',function(req,res){
  res.render('contact')
})
module.exports = router;
