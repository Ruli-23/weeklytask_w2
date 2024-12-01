function FazzFood(harga, voucher, jarak, pajak) {
    let potongan = 0;
  
    // Validasi voucher
    if (voucher === "FAZZFOOD50" && harga >= 50000) {
      potongan = Math.min(harga * 0.5, 50000);
    } else if (voucher === "DITRAKTIR60" && harga >= 25000) {
      potongan = Math.min(harga * 0.6, 30000);
    }
  
    // Hitung biaya antar
    let biayaAntar = 5000;
    if (jarak > 2) {
      biayaAntar += (jarak - 2) * 3000;
    }
  
    // Hitung pajak
    const biayaPajak = pajak ? harga * 0.05 : 0;
  
    // Hitung subtotal
    const subtotal = harga - potongan + biayaAntar + biayaPajak;
  
    return {
      Harga: harga,
      Potongan: potongan,
      BiayaAntar: biayaAntar,
      Pajak: biayaPajak,
      SubTotal: subtotal,
    };
  }
  
  console.log(FazzFood(75000, "FAZZFOOD50", 5, true));
  