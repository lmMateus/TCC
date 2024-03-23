export default function (text) {
  const normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return normalizedText.toLowerCase()
             .replace(/[^a-z0-9\s]/g, '')
             .replace(/\s+/g, '_') 
             .trim();
}