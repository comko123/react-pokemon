export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^.+\\.svg$": "jest-svg-transformer",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1" // @/로 시작하는 경로를 src/ 경로로 설정
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
}
