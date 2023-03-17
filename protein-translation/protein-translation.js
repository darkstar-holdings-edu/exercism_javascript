const CODON_TO_PROTEIN_MAP = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
  UAA: 'Stop',
  UAG: 'Stop',
  UGA: 'Stop',
};

export const translate = (rna = '') => {
  const codons = rna.match(/.{1,3}/g) || [];
  const proteins = new Array();

  for (const codon of codons) {
    const protein = CODON_TO_PROTEIN_MAP[codon];
    if (!protein) {
      throw new Error('Invalid codon');
    }

    if (protein === 'Stop') {
      break;
    }

    proteins.push(protein);
  }

  return proteins;
};
