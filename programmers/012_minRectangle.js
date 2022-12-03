function solution(sizes) {
  let walletWidth = 0;
  let walletHeight = 0;

  sizes.forEach(([w, h]) => {
    walletWidth = Math.max(walletWidth, w >= h ? w : h);
    walletHeight = Math.max(walletHeight, w >= h ? h : w);
  });

  return walletWidth * walletHeight;
}
