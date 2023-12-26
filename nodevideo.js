const fs = require("fs");
const express = require("express");
const app = express();


// HTML CSS JS Videos


app.get("",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/1_Introduction to HTML, CSS, JavaScript.mp4");
    rstream.pipe(res);
});
app.get("/html2",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/2_HTML Tutorial_ Installing VS Code.mp4");
    rstream.pipe(res);
});
app.get("/html3",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/3_HTML Tutorial_ Basic Structure of a Website _ Web Development Tutorials.mp4");
    rstream.pipe(res);
});
app.get("/html4",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/4_HTML Tutorial_ Title, Script, Link.mp4");
    rstream.pipe(res);
});
app.get("/html5",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/5_HTML Tutorial_ Headings.mp4");
    rstream.pipe(res);
});
app.get("/html6",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/6_HTML Tutorial_ Img and Anchor tags _ Web Development Tutorials.mp4");
    rstream.pipe(res);
});
app.get("/html7",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/7_HTML Tutorial_ Lists and Tables _ Web Development Tutorials.mp4");
    rstream.pipe(res);
});
app.get("/html8",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/8_HTML Tutorial_ Forms.mp4");
    rstream.pipe(res);
});
app.get("/html9",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/9_HTML Tutorial_ Inline.mp4");
    rstream.pipe(res);
});
app.get("/html10",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/10_HTML Tutorial_ Ids.mp4");
    rstream.pipe(res);
});
app.get("/html11",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/11_HTML Tutorial_ HTML Entities _ Web Development Tutorials.mp4");
    rstream.pipe(res);
});
app.get("/html12",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/12_HTML Tutorial_ Semantic Tags in HTML_ Web Development Tutorials.mp4");
    rstream.pipe(res);
});
app.get("/html13",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/13_CSS Tutorial_ Introduction to CSS _ Web Development Tutorials.mp4");
    rstream.pipe(res);
});
app.get("/html14",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/14_CSS Tutorial_ Inline, Internal.mp4");
    rstream.pipe(res);
});
app.get("/html15",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./Html css js videos/15_CSS Tutorial_ Selectors in CSS _ Web Development Tutorials.mp4");
    rstream.pipe(res);
});


// C Videos


app.get("/c1",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/1_Why Learn C Programming Language.mp4");
    rstream.pipe(res);
});
app.get("/c2",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/2_What Is Coding.mp4");
    rstream.pipe(res);
});
app.get("/c3",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/3_Install.mp4");
    rstream.pipe(res);
});
app.get("/c4",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/4_Basic Structure of C Program in Hindi_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c5",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/5_Basic Syntax Of A C Program_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c6",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/6_Variables.mp4");
    rstream.pipe(res);
});
app.get("/c7",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/7_Operators In C_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c8",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/8_C Programming Exercise 1 - Multiplication Tables_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c9",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/9_C Format Specifiers and Escape Sequences With Examples _ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c10",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/10_If Else Control Statements In C_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c11",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/11_Switch Case Control Statements In C_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c12",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/12_Loops In C_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c13",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/13_Do While Loop In C_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c14",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/14_While Loop In C_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});
app.get("/c15",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./C videos/15_For Loop In C_ C Tutorial In Hindi.mp4");
    rstream.pipe(res);
});


// JS Videos


app.get("/js1",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/1_Introduction to Java   Installing Java JDK and IntelliJ IDEA for Java.mp4");
    rstream.pipe(res);
});
app.get("/js2",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/2_Basic Structure of a Java Program_ Understanding our First Java Hello World Program.mp4");
    rstream.pipe(res);
});
app.get("/js3",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/3_Java Tutorial_ Variables and Data Types in Java Programming.mp4");
    rstream.pipe(res);
});
app.get("/js4",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/4_Java Tutorial_ Literals in Java.mp4");
    rstream.pipe(res);
});
app.get("/js5",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/5_Java Tutorial_ Getting User Input in Java.mp4");
    rstream.pipe(res);
});
app.get("/js6",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/6_Java Programming Exercise 1_ CBSE Board Percentage Calculator.mp4");
    rstream.pipe(res);
});
app.get("/js7",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/7_Java Tutorial_ Chapter 1- Practice Set _ Java Practice Problems With Solution.mp4");
    rstream.pipe(res);
});
app.get("/js8",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/8_Java Tutorial_ Operators, Types of Operators.mp4");
    rstream.pipe(res);
});
app.get("/js9",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/9_Java Tutorial_ Associativity of Operators in Java.mp4");
    rstream.pipe(res);
});
app.get("/js10",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/10_Java Tutorial_  Data Type of Expressions.mp4");
    rstream.pipe(res);
});
app.get("/js11",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/11_Java Tutorial_ Exercise 1 - Solutions   Shoutouts.mp4");
    rstream.pipe(res);
});
app.get("/js12",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/12_Java Tutorial_ Chapter 2 - Practice Set (Java Practice Questions).mp4");
    rstream.pipe(res);
});
app.get("/js13",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/13_Java Tutorial_ Introduction to Strings.mp4");
    rstream.pipe(res);
});
app.get("/js14",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/14_Java Tutorial_ String Methods in Java.mp4");
    rstream.pipe(res);
});
app.get("/js15",(req,res)=>
{
    res.writeHead(200, {'Content-Type':'video/mp4'});
    const rstream = fs.createReadStream("./java videos/15_Java Practice Questions on Strings_ Practice Set on Java Strings (Must Solve!).mp4");
    rstream.pipe(res);
});

app.listen(1212,()=>
{
    console.log("video is running!!");
});