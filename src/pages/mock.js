const mockUsers = (count) => {
  const firstNames = ["อารีย์", "จิรวัฒน์", "วิชัย", "กานต์ภพ", "สุขสันต์", "ธนพล", "ปภัสสร", "ธัชชัย", "พลอย", "นฤมล", "วิภู", "ณัฐวุฒิ", "ประชากร", "สุดารัตน์", "ประเสริฐ", "สุวัจน์", "ภูดิทัต", "พุฒิพงศ์", "ศิริพงศ์"];
  const lastNames = ["ใจดี", "ชาติชื่น", "สมบัติ", "สุขสำราญ", "เพ็ชรสุพรรณ", "รัตนากร", "ประสงค์", "พงศ์เทพ", "พันธ์มณี", "พันธุ์เจริญ", "วิทยา", "พัชรินทร์", "สิงห์โต", "สวัสดี", "จันทร์พระ", "ประเสริฐศิริ", "เศวตธรรม", "เศรษฐี", "ทองดี", "อินทร์จันทร์"];

  const data = [];

  for (let i = 0; i < count; i++) {
    const firstNameIndex = Math.floor(Math.random() * firstNames.length);
    const lastNameIndex = Math.floor(Math.random() * lastNames.length);

    data.push({
      id: i + 1,
      firstName: firstNames[firstNameIndex],
      lastName: lastNames[lastNameIndex],
      phone: "08xxxxxxxx",
    });
  }

  return data;
};

export { mockUsers };
