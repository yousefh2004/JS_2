var names = [
    "Yousef", "Ali", "Rami", "Sara", "Huda", "Lina", "Ahmad", "Yara", "Mona", "Omar",
    "Noor", "Amira", "Fadi", "Hassan", "Aya", "Khalid", "Leila", "Samer", "Zain", "Nadine",
    "Ibrahim", "Hana", "Mahmoud", "Nour", "Rania", "Salim", "Rasha", "Adel", "Basma", "Waleed",
    "Tariq", "Mariam", "Samira", "Issa", "Farah", "Bilal", "Laila", "Jana", "Mustafa", "Naji",
    "Dina", "Hatem", "Maya", "Tamer", "Loubna", "Saif", "Fayez", "Salma", "Reem", "Zahra",
    "Yazan", "Nabil", "Ola", "Rita", "Jawad", "Shadi", "Kamil", "Nada", "Ibtisam", "Basel",
    "Ziad", "Manal", "Tala", "Anas", "Ghada", "Jamil", "Rabab", "Sami", "Rayan", "Fatima",
    "Walid", "Nourhan", "Karim", "Maysa", "Firas", "Amal", "Lamis", "Sahar", "Rafik", "Iman",
    "Mohammad", "Lamar", "Majed", "Tania", "Ayman", "Shereen", "Qasem", "Haifa", "Bassam", "Nada",
    "Alaa", "Marwa", "Sameh", "Noura", "Murad", "Afaf", "Nizar", "Rida", "Aziz", "Dalia"
    ];
    var data ="";
    for(var index=0;index<names.length;index++)
        data += `<tr><td>${names[index]}</td></tr>`
         document.querySelector("tbody").innerHTML = data;