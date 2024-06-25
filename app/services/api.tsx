const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_COMMON_NINJA_API_TOKEN || "";
const LIMIT = 50;

export const fetchFromCommonNinja = async (assetType: string) => {
  console.log(`${API_BASE_URL}/${assetType}?limit=${LIMIT}`)
  try {
    const response = await fetch(
      `${API_BASE_URL}/${assetType}?limit=${LIMIT}`,
      {
        headers: {
          "CN-API-Token": AUTH_TOKEN,
        },
        next: { revalidate: 10 },
      }
    );

    const res = await response.json();
    return res.docs || [];
  } catch (e) {
    console.log(e);
  }
};
