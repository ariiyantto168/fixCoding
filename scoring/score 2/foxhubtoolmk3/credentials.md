

# Database Foxhub Configuration

**Host :** fox-hub-db.c1culiyh9hss.ap-southeast-1.rds.amazonaws.com
**User :** Foxhub
**Database :** DB_Foxhub
**Password :** bulldog12345
**Driver :** postgresql




# ***QUERY DEN FOR INSTRUKTUR***



## <u>All Challenges Specified BUDDY ID</u>

**SELECT** u.id , u.**name**, c.title, t.id_challenge, t.score, t.feedback, t.link, t.id, t."createdAt" **FROM** tasks t

**LEFT JOIN** users u **ON** t.id_user = u.id 

**LEFT JOIN** challenges c **ON** t.id_challenge = c.id

**WHERE** id_user **IN** ([buddy id], [buddy id], [buddy id]) 

**ORDER** **BY** t.id_user , t.id **ASC**


---


## <u>Table Tasks ( get Score, Feedback) All Student Batch 42 by CHALLENGES ID</u>

**SELECT** u.id , u.**name**, score, feedback, link, t.id as tasked, t."createdAt" **FROM** tasks t

**LEFT JOIN** users u **ON** t.id_user = u.id 

**WHERE** id_user **BETWEEN** 818 **AND** 847 

**AND** id_challenges = [challenges id]

**ORDER** **BY** t.id_user , t.id **ASC**


---


## <u>Table Tasks Specified BUDDY ID with specific CHALLENGES ID</u>

**SELECT** * **from**  tasks t2 

**WHERE** id_user **in** ([buddy id], [buddy id]) 

**and** id_challenge  = [challenges id]

**order** **by** id_user 

---

# **CREDENTIAL**

## 45% Weekly Challenges Score

`credential økeyyyyyy !`
--

**SELECT** id, "name",

**SUM** (**CASE** cid **WHEN** 6 **THEN** score **ELSE** 0 **END**) **AS** ifelse,

**SUM** (**CASE** cid **WHEN** 7 **THEN** score **ELSE** 0 **END**) **AS** switchcase,

**SUM** (**CASE** cid **WHEN** 33 **THEN** score **ELSE** 0 **END**) **AS** target,

**SUM** (**CASE** cid **WHEN** 118 **THEN** score **ELSE** 0 **END**) **AS** animal,

**SUM** (**CASE** cid **WHEN** 163 **THEN** score **ELSE** 0 **END**) **AS** gen,

**SUM** (**CASE** cid **WHEN** 160 **THEN** score **ELSE** 0 **END**) **AS** highscore,

**SUM** (**CASE** cid **WHEN** 145 **THEN** score **ELSE** 0 **END**) **AS** shop,

**SUM** (**CASE** cid **WHEN** 146 **THEN** score **ELSE** 0 **END**) **AS** tokox,

**ROUND**( **AVG** (score)) **AS** average

​	**FROM** ( **SELECT** u.id, u.**name**, t.score, t.id_challenge **as** cid, t.feedback , t.id_instructor ,

​	**ROW_NUMBER**() **OVER** (**PARTITION** **BY** t.id_challenge, t.id_user **ORDER** **BY** t."createdAt") **as** upload

​	**FROM** users u **left** **join** tasks t **on** t.id_user = u.id 

​	**where** t.score > 0 )**AS** rawData 

**WHERE** id > 817

**AND** upload = 1 

**GROUP** **by** id, **name**



## LIST CHALLENGES EACH WEEK

###### **For livecode score, feedback, and file..  Open airtable Queen Fox :rainbow:**

#### WEEK 2*

| ID CHALLENGES | TITLE                                                        |
| ------------- | ------------------------------------------------------------ |
| 4             | Pseudocode Challenge                                         |
| 5             | Codecademy JavaScript Building Blocks: Unit 1 and 2 - Intro and Control Flow only |
| 6             | Mengenal penggunaan Conditional if-else dalam JavaScript     |
| 7             | Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript |
| 8             | Bermain dengan String di JavaScript                          |
| 9             | Berlatih Perulangan di JavaScript                            |
| 10            | Perulangan - Play with Asterisks                             |
| 11            | JavaScript Building Blocks: Codecademy JavaScript Course (Unit 3 - Functions) |
| 12            | Berlatih Penggunaan Functions                                |
| 13            | Bandingkan Angka                                             |
| 14            | Balik Kata                                                   |
| 15            | Konversi Menit                                               |
| 16            | X dan O                                                      |



#### *WEEK 3*

| ID CHALLENGES | TITLE                                                        |
| ------------- | ------------------------------------------------------------ |
| 26            | Palindrome                                                   |
| 27            | Hitung Jumlah Kata                                           |
| 28            | Perkalian Unik                                               |
| 29            | Pasangan Terbesar                                            |
| 30            | Palindrome Angka                                             |
| 31            | Deret Aritmatika                                             |
| 32            | Deret Geometri                                               |
| 33            | Target Terdekat                                              |
| 113           | Codecademy JavaScript - Unit 4 (Array)                       |
| 114           | Tantangan Array - 1                                          |
| 115           | Tantangan Array - 2                                          |
| 116           | Tantangan Array - 3 (Pakai built-in yang disebutkan)         |
| 117           | Mengelompokkan Angka                                         |
| 118           | Mengelompokkan Hewan (harus pake cara flagging kalo mau 100 ) |
| 132           | Mencari Mean (pakai Math.round soal salah penjelasannya okey) |



#### WEEK 4*

| ID CHALLENGES | TITLE                                                        |
| ------------- | ------------------------------------------------------------ |
| 133           | Angka Prima                                                  |
| 134           | Faktor Persekutuan Terbesar                                  |
| 135           | Cari Median (seharusnya di sort dulu yaa, ada test case yang salah) |
| 136           | Cari Modus                                                   |
| 137           | Ubah Huruf                                                   |
| 139           | Digit Perkalian Minimum                                      |
| 140           | Urutkan Abjad                                                |
| 142           | Tukar Ukuran (boleh pake toUpperCase & toLowerCase)          |
| 143           | Cek AB                                                       |
| 144           | Change Me                                                    |
| 145           | Shopping Time                                                |
| 146           | Toko X                                                       |
| 158           | Deep Sum                                                     |
| 159           | Naik Angkot                                                  |
| 160           | Highest Score                                                |
| 161           | Graduates                                                    |



#### *WEEK 5*

| ID CHALLENGES | TITLE                                                        |
| ------------- | ------------------------------------------------------------ |
| 156           | Damage Calculation (kumpul dengan pull request)              |
| 157           | Melee Ranged Grouping (kumpul dengan pull request)           |
| 162           | Most Frequent Largest Numbers                                |
| 163           | Password Generator ( toLowerCase()  or  .toUpperCase() allowed ,  others built-in **NOT ALLOWED**.  huruf vokal aiueo ganti other? Engga. ) |





# GOODBYE FOXHUB ACCOUNT! 

# HELLO ​N​E​W​ ​DE​N​​ & ​4​ ​Weeks P​0​ !!:fox_face::fox_face::fox_face:



### more airtable scoring :heart_eyes_cat:


banyakkan..
4:22
-- udah https://github.com/mutiaramarpaung/week-tiga/blob/master/pasanganAngkaTerbesar.js
pake split
4:22
-- udah https://github.com/ardiishartono/ardiishartono.github.io/blob/master/pasanganAngkaTerbesar.js hardcode (ini yg tadi juga)
4:23
-- udah https://github.com/VEEXMON/Week3/blob/master/exe13.js
spread syntax
4:24
-- udah https://github.com/fakhrirf/h8-pw0-w3/blob/master/exercises13.js indexof
4:24
slice juga
4:25
-- udah https://github.com/widyo05/h8-p0-w3/blob/master/exercises13.js coba deh kalo ini test case lain aneh codenya
4:27
-- udah https://github.com/dhimasadip/h8-p0-w3/blob/master/Exercise%2013.js coba cek hardcode gak nih
4:28
-- udah https://github.com/monovz/hacktiv8/blob/master/week-3/task-13.js juga cek hardcodenya

Ari Yanto  4:28 PM
-- udah https://github.com/dhimasadip/h8-p0-w3/blob/master/Exercise%2013.js coba cek hardcode gak nih, hardcode ka

Ayu Sudi  4:28 PM
tuh adanya gue nyari

Ari Yanto  4:28 PM
yg kasih hardcode kasih berapa ka ?

Ayu Sudi  4:28 PM
yaudah nilai
4:28
80
4:28
75
4:28
terserah
4:28
77

Ari Yanto  4:29 PM
wkwk oke 75

Ayu Sudi  4:30 PM
https://github.com/ggnalig/Hacktiv8-w3/blob/master/anchor13%2C14%2C15-w3/taget-terdekat.js cek ini jalan gak loopnya ada return abisnya