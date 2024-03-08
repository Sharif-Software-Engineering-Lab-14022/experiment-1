# Experiment 1
It's the first experiment of Software Engineering Lab course in Spring 2024 at Sharif University of Technology.

## Report
### مقدمه
در این پروژه ما از GitHub به عنوان remote repository استفاده می‌کنیم. تصمیم گرفتیم این پروژه را پیاده‌سازی یک ماشین حساب ساده با استفاده از ReactJS Framework در نظر بگیریم. همچنین طبق اصول مهندسی نرم‌افزار، ما فایل gitignore. را با مواردی همچون node_modules/ (بسته‌های استفاده شده در کد front که مجموع آن‌ها حجم بالایی دارد و آپلود آن در remote repository منطقی نیست و به راحتی با استفاده از دستور `npm i` قابل نصب هستند.) و DS_Store. (معمولاً در directoryهای مک موجود هستند.) کامل کردیم. برای بهتر initialize کردن آن، از templateهای موجود در اینترنت همچون انواع سیستم عامل و نوع کد (front) بهره بردیم.

### پیاده‌سازی
همان‌طور که در روال انجام آزمایش گفته شده است، ما برای پیاده‌سازی این پروژه از حداقل ۲۰ commit معنادار استفاده کرده‌ایم که در repository قابل مشاهده است. همچنین از branchهای زیر استفاده کرده‌ایم:
- شاخه‌ی **AmirMohammadFakhimi/feature/logic**: پیاده‌سازی logic ماشین حساب از جمله انواع عملیات‌های حسابی.
- شاخه‌ی **AmirMohammadFakhimi/feature/answering-questions**: پاسخ به سؤالات موجود در دستور کار آزمایش.
- شاخه‌ی **AmirMohammadFakhimi/feature/report**: نوشتن گزارش آزمایش.
- شاخه‌ی **MohammadAminLotfi/fix/change-title**: تغییر header و footer ماشین حساب برای ایجاد conflict.
- شاخه‌ی **hotfix**: برطرف کردن سریع باگ‌های کوچک.
- شاخه‌ی **gh-pages**: برای deploy در GitHub Pages با استفاده از دستور `gh-pages` استفاده شده است.

### رفع conflict:
1. برای اولین مورد، ما یک شاخه‌ی جدید از شاخه‌ی main ساختیم و اسم آن را `MohammadAminLotfi/fix/change-title` گذاشتیم. سپس یک شاخه‌ی دیگر از main ایجاد کردیم و اسم آن را `AmirMohammadFakhimi/feature/logic` گذاشتیم.  در هر دوی این شاخه‌ها header و footer را تغییر دادیم. در نهایت ابتدا `MohammadAminLotfi/fix/change-title` را با شاخه‌ی اصلی (main) merge کردیم (بدون conflict). سپس خواستیم `AmirMohammadFakhimi/feature/logic` را نیز  با شاخه‌ی اصلی (main) merge کنیم که به conflict خوردیم و آن را resolve کردیم.
2. ...

### مستقرسازی:
ابتدا با استفاده از دستور `gh-pages` برنامه را در GitHub Pages مستقر کردیم و سپس برای راه‌اندازی CD، از GitHub Actions استفاده کردیم که فایل مربوط به آن در `github/workflows/deployment.yml.` موجود است. در آن ابتدا به ازای هر push، آن action اجرا می‌شود و سپس مراحل deploy طی می‌شود.

[منبع ۱](https://blog.logrocket.com/deploying-react-apps-github-pages)، [منبع ۲](https://www.youtube.com/watch?v=5I37iVCDUTU)

### سایر جزئیات:
- شاخه‌ی main همان‌طور که گفته شد، محافظت شده است. این کار از طریق منوی `Settings -> Branches` انجام شده است.
- تمام کارهای کد با استفاده از Pull Request مدیریت شده‌اند.

## Questions
### 1
#### پوشه‌ی git. چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی git. یک پوشه‌ی مخفی است که در هر مخزن گیت وجود دارد. این پوشه هسته مخزن گیت است و تمام اطلاعات متادیتا و پیکربندی لازم برای کنترل نسخه را شامل می‌شود. موارد زیر معمولاً درون پوشه‌ی git. وجود دارند که عبارتند از:
1. **پیکربندی مخزن (repository configuration):** تنظیمات پیکربندی مانند جزئیات کاربر، ایمیل، شاخه پیش‌فرض (default branch) و غیره در فایل git/config. ذخیره می‌شوند.
2. **پایگاه داده‌ی آبجکت:** گیت تمام بازبینی‌های فایل و اسناد را به صورت آبجکت بطور فشرده در دایرکتوری git/objects. ذخیره می‌کند. در اینجا داده‌های واقعی فایل‌ها قرار دارد.
3. **شاخه‌ها:** اطلاعات مربوط به شاخه‌ها و نسخه‌های آن‌ها در دایرکتوری git/refs/heads. ذخیره می‌شود.
4. **برچسب‌ها (tags):** مراجع برچسب‌ها در دایرکتوری git/refs/tags. ذخیره می‌شوند.
5. **اندیس (index):** منطقه staging، همچنین با نام index شناخته می‌شود، در git/index. ذخیره می‌شود. در اینجا گیت تغییراتی که برای کامیت آماده هستند را نگهداری می‌کند.
6. **تاریخچه‌ی کامیت:** تاریخچه‌ی کامیت در دایرکتوری git/logs. ذخیره می‌شود، به‌ویژه در فایل‌هایی مانند HEAD و <refs/heads/<branch.
7. **هوک‌ها:** هوک‌های گیت که اسکریپت‌هایی هستند که در نقاط مشخصی از جریان کار گیت اجرا می‌شوند، در دایرکتوری git/hooks. ذخیره می‌شوند.

برای ایجاد یک مخزن گیت و ایجاد پوشه‌ی git.، معمولاً از دستور git init استفاده می‌شود.
این دستور یک مخزن گیت جدید را در دایرکتوری فعلی مقداردهی اولیه می‌کند و پوشه‌ی git. را به همراه فایل‌ها و دایرکتوری‌های لازم در داخل آن ایجاد می‌کند.

---
### 2
#### منظور از atomic بودن در atomic commit و atomic pull-request چیست؟

در گیت، واژه‌ی "اتمی" به مفهوم این است که یک عملیات غیرقابل تجزیه و تفکیک است.
- مفهوم **Atomic Commit:** به معنای این است که تمام تغییرات مرتبط با یک وظیفه یا ویژگی خاص به عنوان یک واحد تکی کامیت می‌شوند. این اطمینان را به ما می‌دهد که یا تمام تغییرات با موفقیت اعمال می‌شوند یا هیچ کدام از آن‌ها. Atomic Commit به حفظ تاریخچه‌ی تمیز و منطقی در سیستم کنترل نسخه کمک می‌کند و این باعث می‌شود تا درک تکامل پایگاه کد در طول زمان آسان‌تر شود.
- مفهوم **Atomic Pull Request:** شامل تمام تغییرات لازم برای اجرای یک ویژگی خاص یا رفع یک باگ است و یک واحد کاری یکپارچه را نمایان می‌کند. Atomic Pull Request به این معناست که تغییرات غیرمرتبط یا ویژگی‌های ناتمام را شامل نمی‌شود. این باعث می‌شود که فرآیند بررسی قابل مدیریت‌تر شود، زیرا بازبینان (reviewers) می‌توانند بر روی ارزیابی یک مجموعه تغییرات منسجم، تمرکز کنند.

در هر دو مورد، واژه "Atomic" بر این تاکید می‌کند که عملیات باید مستقل و سازگار باشد، بدون تغییرات جزئی یا ناتمام. این روش، همکاری (collaboration) و قابلیت ادامه کار در جریان‌های کاری (workflows) توسعه نرم‌افزار را ترویج می‌کند.

---
### 3
#### تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick را بیان کنید.

- دستور **fetch:** تغییرات جدید را از یک مخزن از راه دور دانلود می‌کند بدون ادغام آن‌ها به شاخه‌های محلی. این دستور، کپی محلی از شاخه‌های ریموت را به‌روزرسانی می‌کند، امکان مشاهده آنچه که سایر توسعه‌دهندگان در حال کار بر روی آن هستند را فراهم می‌کند. این دستور working directory یا شاخه‌های محلی را تغییر نمی‌دهد؛ فقط remote tracking branches در مخزن را به‌روز می‌کند.
- دستور **pull:** تغییرات را از یک مخزن ریموت بارگیری می‌کند و سپس آن‌ها را در شاخه محلی فعلی ادغام می‌کند. این اساساً یک ترکیب از git fetch و سپس git merge است. این دستور شاخه فعلی شما را با آخرین تغییرات از مخزن ریموت به‌روز می‌کند و به‌طور خودکار آن‌ها را در working directory ادغام می‌کند.
- دستور **merge:** تغییرات از یک شاخه را در شاخه دیگری ترکیب می‌کند. یک کامیت جدید ایجاد می‌کند که تغییرات از شاخه مشخص شده را در شاخه فعلی ترکیب می‌کند. مرج کردن یک راه متداول برای ادغام تغییرات از یک شاخه (مانند یک شاخه فیچر) به شاخه دیگری (مانند شاخه اصلی) است.
- دستور **rebase:** کامیت‌ها را از یک شاخه به شاخه دیگر منتقل یا بازنویسی می‌کند. پایه برنچ را به یک کامیت متفاوت، معمولاً آخرین کامیت برنچ دیگر، تغییر می‌دهد. این دستور برای حفظ تاریخچه کامیت تمیز و خطی مفید است، زیرا از ایجاد کامیت‌های مرج غیرضروری جلوگیری می‌کند. با این حال، باید با احتیاط استفاده شود، به ویژه در شاخه‌های مشترک، زیرا تاریخچه کامیت را بازنویسی می‌کند که ممکن است باعث بروز تضاد برای ایجادکنندگان دیگر شود.
- دستور **cherry-pick:** یک کامیت تکی از یک شاخه را انتخاب کرده و بر روی شاخه دیگری اعمال می‌کند. این دستور این امکان را می‌دهد تا کامیت‌های خاص را انتخاب کنیم بدون ادغام کل شاخه‌ها. این دستور برای اعمال اصلاحات باگ یا بهبود فیچر از یک شاخه به شاخه دیگر مفید است، به ویژه زمانی که نمی‌خواهیم کل شاخه را ادغام کنید.

---
### 4
#### تفاوت دستورهای reset و revert و restore و switch و checkout را بیان کنید.

- دستور **reset:** این دستور وقتی استفاده می‌شود که می‌خواهیم repository را به یک commit خاص برگردانیم و از تمام تغییرات بعد از آن چشم‌پوشی کنیم. ([منبع](https://www.w3schools.com/git/git_reset.asp?remote=github)) 
- دستور **revert:** در این دستور نیز نتیجه‌ی نهایی به نوعی است که انگار به یک commit خاص برگشته‌ایم. در دستور reset بخش قبل، HEAD و branch ref pointers به همان commit مشخص شده برمی‌گردند ولی در دستور revert، آن‌ها به commit مشخص شده برنمی‌گردند بلکه گیت تلاش می‌کند تا تغییرات از commit مشخص شده تا الآن را به نوعی reverse کند و مجموعه‌ی تمام آن‌ها را در قالب یک commit **جدید** قرار دهد. در نهایت HEAD و branch ref pointers به commit جدید اشاره می‌کنند که انتهای branch است. ([منبع](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert))
- دستور **restore:** به طور پیش‌فرض با استفاده از این دستور، آخرین کامیت بازمی‌گردد و تمام تغییراتِ پس از آن (که کامیت نشده‌اند) پاک می‌شود. اگر به همراه این دستور از `staged--` نیز استفاده کنیم، آخرین فایل‌های stage شده، unstage می‌شوند و به عبارتی این کار برعکس دستور `add` است. ([منبع](https://www.educative.io/answers/what-are-the-reset-restore-and-revert-commands-in-git)) 
- دستور **switch:** برای جابه‌جایی بین branchها استفاده می‌شود. به عبارتی با استفاده از این دستور می‌توانیم HEAD branch را تغییر دهیم. ([منبع](https://www.git-tower.com/learn/git/commands/git-switch)) 
- دستور **checkout:** برای جابه‌جایی بین branchها استفاده می‌شود. به عبارتی با استفاده از این دستور می‌توانیم HEAD branch را تغییر دهیم. ولی با این دستور برخلاف switch، کارهای دیگری نیز می‌توان انجام داد همچون حذف تغییرات، restore کردن فایل‌ها و .... با استفاده از دستور switch که به نوعی خاص منظوره شده است، تنها می‌توان درست کردن و تغییر branch را انجام داد. ([منبع](https://www.git-tower.com/learn/git/commands/git-switch)) 

---
### 5
#### منظور از stage یا همان index چیست؟ دستور stash چه کاری را انجام می‌دهد؟

- این مورد یک مرحله بین workspace و repository است که کار اصلی آن set up و ترکیب کردن تمام تغییراتی است که تا آن لحظه داده شده تا آن‌ها آماده‌ی commit شدن در repository شوند. ([منبع](https://www.geeksforgeeks.org/git-index))
-  از این دستور برای ذخیره کردن تغییرات commit نشده (staged و unstaged) استفاده می‌کنیم. سپس پروژه به آخرین commit بازمی‌گردد. حال می‌توانیم کار دلخواهمان را انجام دهیم و در نهایت تغییر ذخیره شده را pop کنیم (همانند stack عمل می‌کند.) و آن تغییرات به روی پروژه‌ی حاضر، اعمال شوند. ([منبع](https://www.atlassian.com/git/tutorials/saving-changes/git-stash))

---
### 6
#### مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟ (راهنمایی: [لینک](https://github.blog/2020-12-17-commits-are-snapshots-not-diffs))

مفهوم snapshot یعنی یک state خاص وضعیت از پروژه. با توجه به این تعریف، هر commit یک snapshot است.

---
### 7
#### تفاوت‌های local repository و remote repository چیست؟
خود remote repository به روی یک محیط مشترک که اعضای تیم ایجاد به آن دسترسی دارند، قرار گرفته است، برای مثال ابر، GitHub، سرور خود شرکت یا ... در حالی که local repository به روی دستگاه هر عضو تیم به صورت جداگانه و local قرار دارد. عملاً برای همکاری با اعضای تیم، نیاز به یک remote repository است ولی وقتی یک نفر تنهایی به روی یک پروژه کار می‌کند، نیازی به remote repository ندارد. ([منبع](https://nulab.com/learn/software-development/git-tutorial/git-basics/repositories/remote-repositories-vs-local-repositories)) 
