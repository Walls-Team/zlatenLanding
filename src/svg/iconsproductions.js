import React from "react";

export const AudioIcon = ({ width }) => {
  return (
    <svg
      width={width ? width : "80"}
      height={width ? width : "80"}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="10" fill="#EFD9CE" />
      <g clipPath="url(#clip0_860_287)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61 40C61 51.598 51.598 61 40 61C28.402 61 19 51.598 19 40C19 28.402 28.402 19 40 19C51.598 19 61 28.402 61 40ZM64 40C64 53.2548 53.2548 64 40 64C26.7452 64 16 53.2548 16 40C16 26.7452 26.7452 16 40 16C53.2548 16 64 26.7452 64 40ZM39.5156 31.4612C39.8374 31.1851 40.2166 31.0422 40.6035 31.008C41.7643 30.9057 43 31.791 43 33.0627V47.8557C43 48.702 42.4577 49.4581 41.7715 49.7737C41.0853 50.0892 40.1579 50.0087 39.5156 49.4573V49.4553L35.4434 45.9592H32.5C31.1364 45.9592 30 44.8228 30 43.4592V37.4592C30 36.0956 31.1364 34.9592 32.5 34.9592H35.4434L39.5156 31.4631V31.4612ZM46.1216 35.2177C46.3551 35.0532 46.6307 34.9588 46.916 34.9455C47.1418 34.9348 47.3672 34.9753 47.5752 35.0639C47.7832 35.1525 47.9685 35.287 48.1172 35.4573C49.3041 36.7799 50.0371 38.5408 50.0371 40.4592C50.0371 42.3777 49.3041 44.1385 48.1172 45.4612C47.9856 45.6079 47.8264 45.7273 47.6487 45.8125C47.471 45.8977 47.2783 45.947 47.0815 45.9578C46.8847 45.9685 46.6877 45.9403 46.5018 45.8749C46.3159 45.8095 46.1447 45.7081 45.998 45.5765C45.8513 45.4449 45.7319 45.2857 45.6467 45.108C45.5615 44.9303 45.5122 44.7375 45.5015 44.5407C45.4908 44.3439 45.5189 44.147 45.5844 43.9611C45.6498 43.7752 45.7512 43.604 45.8828 43.4573C46.6019 42.6559 47.0371 41.6187 47.0371 40.4592C47.0371 39.2997 46.6019 38.2625 45.8828 37.4612C45.6892 37.2512 45.5595 36.9903 45.509 36.7092C45.4585 36.4281 45.4893 36.1384 45.5979 35.8741C45.7064 35.6099 45.8881 35.3822 46.1216 35.2177ZM40 45.9162V35.0022L36.9766 37.5979C36.7046 37.8311 36.3582 37.9592 36 37.9592H33V42.9592H36C36.3582 42.9592 36.7046 43.0874 36.9766 43.3205L40 45.9162Z"
          fill="#27232C"
        />
      </g>
      <defs>
        <clipPath id="clip0_860_287">
          <rect x="16" y="16" width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TwoDIcon = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="10" fill="#C8E2F5" />
      <g clipPath="url(#clip0_860_109)">
        <path
          d="M41.016 38.3155L40.2 39.4842V33C40.2 32.6817 40.0736 32.3765 39.8485 32.1515C39.6235 31.9264 39.3183 31.8 39 31.8H37C36.6817 31.8 36.3765 31.9264 36.1515 32.1515C35.9264 32.3765 35.8 32.6817 35.8 33C35.8 33.3183 35.9264 33.6235 36.1515 33.8485C36.3765 34.0736 36.6817 34.2 37 34.2H37.8V43.8H28.2V34.2H29C29.3183 34.2 29.6235 34.0736 29.8485 33.8485C30.0736 33.6235 30.2 33.3183 30.2 33C30.2 32.6817 30.0736 32.3765 29.8485 32.1515C29.6235 31.9264 29.3183 31.8 29 31.8H27C26.6817 31.8 26.3765 31.9264 26.1515 32.1515C25.9264 32.3765 25.8 32.6817 25.8 33V45C25.8 45.3183 25.9264 45.6235 26.1515 45.8485C26.3765 46.0736 26.6817 46.2 27 46.2H35.496L34.0161 48.3154L34.0157 48.316C33.8909 48.4959 33.8177 48.7065 33.804 48.9249C33.7903 49.1434 33.8366 49.3615 33.938 49.5555C34.0393 49.7496 34.1918 49.9122 34.379 50.0258C34.5661 50.1394 34.7808 50.1996 34.9997 50.2H35C38.3822 50.2 40.9773 50.2112 42.9723 50.2198C45.398 50.2303 46.9366 50.2369 47.9244 50.215C48.8149 50.1951 49.292 50.1526 49.571 50.0535C49.7225 49.9997 49.8266 49.9261 49.9065 49.8267C49.9633 49.7561 50.0066 49.6711 50.0432 49.5993C50.0514 49.5832 50.0593 49.5677 50.067 49.5531C50.0715 49.5446 50.0761 49.5359 50.0808 49.527C50.1234 49.4467 50.172 49.3551 50.1989 49.2556C50.2317 49.1341 50.232 49.008 50.1922 48.8581C50.1186 48.5804 49.8981 48.1932 49.4577 47.5317C48.9851 46.8217 48.2356 45.763 47.0811 44.1321C46.061 42.6912 44.7248 40.8037 42.9839 38.3153C42.8733 38.157 42.7261 38.0277 42.5549 37.9384C42.3836 37.849 42.1932 37.8024 42 37.8024C41.8068 37.8024 41.6164 37.849 41.4451 37.9384C41.2738 38.0277 41.1266 38.1571 41.016 38.3155C41.016 38.3155 41.016 38.3155 41.016 38.3155ZM40.2 43.663L42 41.0889L46.696 47.8H37.3041L38.4241 46.2H39C39.3183 46.2 39.6235 46.0736 39.8485 45.8485C40.0736 45.6235 40.2 45.3183 40.2 45V43.663Z"
          fill="#27232C"
          stroke="#27232C"
          stroke-width="0.4"
        />
        <path
          d="M49 29.8C47.9715 29.8 46.9662 30.105 46.111 30.6764C45.2559 31.2477 44.5894 32.0599 44.1958 33.01C43.8023 33.9602 43.6993 35.0058 43.8999 36.0145C44.1006 37.0232 44.5958 37.9497 45.323 38.677C46.0503 39.4042 46.9768 39.8994 47.9855 40.1001C48.9942 40.3007 50.0398 40.1977 50.99 39.8042C51.9401 39.4106 52.7523 38.7441 53.3236 37.889C53.895 37.0338 54.2 36.0285 54.2 35C54.2 33.6209 53.6521 32.2982 52.677 31.323C51.7018 30.3479 50.3791 29.8 49 29.8ZM49 37.8C48.4462 37.8 47.9049 37.6358 47.4444 37.3281C46.9839 37.0204 46.6251 36.5831 46.4131 36.0715C46.2012 35.5599 46.1458 34.9969 46.2538 34.4537C46.3618 33.9106 46.6285 33.4117 47.0201 33.0201C47.4117 32.6285 47.9106 32.3618 48.4537 32.2538C48.9969 32.1458 49.5599 32.2012 50.0715 32.4131C50.5831 32.6251 51.0205 32.9839 51.3281 33.4444C51.6358 33.9049 51.8 34.4462 51.8 35C51.8 35.7426 51.505 36.4548 50.9799 36.9799C50.4548 37.505 49.7426 37.8 49 37.8Z"
          fill="#27232C"
          stroke="#27232C"
          stroke-width="0.4"
        />
        <path
          d="M29.5 34.2H36.5C36.9694 34.2 37.1969 34.1738 37.3954 34.1159C37.4738 34.093 37.5469 34.0653 37.6215 34.037C37.637 34.0311 37.6526 34.0251 37.6684 34.0192C37.7618 33.9841 37.8726 33.9443 38.0298 33.8994C38.3685 33.8027 38.6478 33.6848 38.8471 33.5473C39.0403 33.4141 39.2 33.2319 39.2 33C39.2 32.7681 39.0403 32.5859 38.8471 32.4527C38.6478 32.3152 38.3685 32.1973 38.0298 32.1006C37.8726 32.0557 37.7618 32.0159 37.6684 31.9808C37.6526 31.9749 37.637 31.9689 37.6215 31.963C37.5469 31.9347 37.4738 31.907 37.3954 31.8841C37.1969 31.8262 36.9694 31.8 36.5 31.8H29.5C29.0306 31.8 28.8031 31.8262 28.6046 31.8841C28.5262 31.907 28.4531 31.9347 28.3785 31.963C28.363 31.9689 28.3474 31.9749 28.3316 31.9808C28.2382 32.0159 28.1274 32.0557 27.9702 32.1006C27.6315 32.1973 27.3522 32.3152 27.1529 32.4527C26.9597 32.5859 26.8 32.7681 26.8 33C26.8 33.2319 26.9597 33.4141 27.1529 33.5473C27.3522 33.6848 27.6315 33.8027 27.9702 33.8994C28.1274 33.9443 28.2382 33.9841 28.3316 34.0192C28.3474 34.0251 28.363 34.0311 28.3785 34.037C28.4531 34.0653 28.5262 34.093 28.6046 34.1159C28.8031 34.1738 29.0306 34.2 29.5 34.2Z"
          fill="#27232C"
          stroke="#27232C"
          stroke-width="0.4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 61C51.598 61 61 51.598 61 40C61 28.402 51.598 19 40 19C28.402 19 19 28.402 19 40C19 51.598 28.402 61 40 61ZM40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16C26.7452 16 16 26.7452 16 40C16 53.2548 26.7452 64 40 64Z"
          fill="#27232C"
        />
      </g>
      <defs>
        <clipPath id="clip0_860_109">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const PlayMusic = (fill) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM23.5156 15.4612C23.8374 15.1851 24.2166 15.0422 24.6035 15.008C25.7643 14.9057 27 15.791 27 17.0627V31.8557C27 32.702 26.4577 33.4581 25.7715 33.7737C25.0853 34.0892 24.1579 34.0087 23.5156 33.4573V33.4553L19.4434 29.9592H16.5C15.1364 29.9592 14 28.8228 14 27.4592V21.4592C14 20.0956 15.1364 18.9592 16.5 18.9592H19.4434L23.5156 15.4631V15.4612ZM30.1216 19.2177C30.3551 19.0532 30.6307 18.9588 30.916 18.9455C31.1418 18.9348 31.3672 18.9753 31.5752 19.0639C31.7832 19.1525 31.9685 19.287 32.1172 19.4573C33.3041 20.7799 34.0371 22.5408 34.0371 24.4592C34.0371 26.3777 33.3041 28.1385 32.1172 29.4612C31.9856 29.6079 31.8264 29.7273 31.6487 29.8125C31.471 29.8977 31.2783 29.947 31.0815 29.9578C30.8847 29.9685 30.6877 29.9403 30.5018 29.8749C30.3159 29.8095 30.1447 29.7081 29.998 29.5765C29.8513 29.4449 29.7319 29.2857 29.6467 29.108C29.5615 28.9303 29.5122 28.7375 29.5015 28.5407C29.4908 28.3439 29.5189 28.147 29.5844 27.9611C29.6498 27.7752 29.7512 27.604 29.8828 27.4573C30.6019 26.6559 31.0371 25.6187 31.0371 24.4592C31.0371 23.2997 30.6019 22.2625 29.8828 21.4612C29.6892 21.2512 29.5595 20.9903 29.509 20.7092C29.4585 20.4281 29.4893 20.1384 29.5979 19.8741C29.7064 19.6099 29.8881 19.3822 30.1216 19.2177ZM24 29.9162V19.0022L20.9766 21.5979C20.7046 21.8311 20.3582 21.9592 20 21.9592H17V26.9592H20C20.3582 26.9592 20.7046 27.0874 20.9766 27.3205L24 29.9162Z" />
    </svg>
  );
};
export const Play = (fill) => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1377_539)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M45 24C45 35.598 35.598 45 24 45C12.402 45 3 35.598 3 24C3 12.402 12.402 3 24 3C35.598 3 45 12.402 45 24ZM48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM34.6029 25.9485C35.4412 25.5294 36 24.5515 36 23.5735C36 22.5956 35.4412 21.6176 34.6029 21.3382L21.3309 11.5588L21.1912 11.4191C20.3529 10.8603 19.2353 10.8603 18.3971 11.4191C17.5588 11.8382 17 12.8162 17 13.7941V33.3529C17 34.3309 17.5588 35.1691 18.3971 35.7279C19.2353 36.1471 20.3529 36.1471 21.1912 35.7279L34.6029 25.9485ZM33.0662 23.5735L19.7941 33.3529V13.7941L32.9265 23.4338L33.0662 23.5735Z" />
      </g>
      <defs>
        <clipPath id="clip0_1377_539">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};
export const Preview = () => {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.0922 33.9371L32.0922 33.9372L32.0959 33.9408C32.3412 34.1777 32.6697 34.3088 33.0107 34.3058C33.3517 34.3028 33.6779 34.1661 33.9191 33.9249C34.1602 33.6838 34.297 33.3576 34.2999 33.0166C34.3029 32.6756 34.1718 32.3471 33.9349 32.1018L33.9349 32.1017L33.9313 32.098L28.7947 26.9614C29.9908 25.3213 30.5499 23.2982 30.3611 21.2709C30.1641 19.1553 29.1675 17.1945 27.5745 15.7884C25.9815 14.3824 23.9122 13.637 21.7885 13.7042C19.6649 13.7714 17.647 14.6461 16.1462 16.1499C15.3707 16.925 14.7555 17.8453 14.3358 18.8583C13.916 19.8712 13.7 20.9569 13.7 22.0533C13.7 23.1498 13.916 24.2355 14.3358 25.2484C14.7554 26.2613 15.3706 27.1815 16.146 27.9566C17.5832 29.3959 19.4972 30.2599 21.5273 30.3859C23.4689 30.5064 25.3885 29.9438 26.9556 28.8005L32.0922 33.9371ZM16.7356 19.8532C17.0059 19.2002 17.3951 18.6036 17.8829 18.0933L17.9852 17.991C18.9252 17.051 20.1621 16.466 21.4852 16.3357C22.8082 16.2053 24.1355 16.5378 25.2409 17.2763C26.3463 18.0149 27.1614 19.1139 27.5474 20.3861C27.9334 21.6582 27.8663 23.0249 27.3577 24.2531C26.849 25.4814 25.9302 26.4953 24.7578 27.1221C23.5854 27.7489 22.2319 27.9498 20.928 27.6906C19.6241 27.4314 18.4504 26.7281 17.6069 25.7005C16.7634 24.673 16.3022 23.3847 16.302 22.0553L16.302 22.0543C16.2994 21.2991 16.4468 20.551 16.7356 19.8532Z" fill="#F8F100" stroke="#F8F100" stroke-width="0.6" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45ZM24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#F8F100" />
    </svg>
  );
};
export const ThreeDIcon = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="10" fill="#EBE9F5" />
      <g clipPath="url(#clip0_860_235)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 61C51.598 61 61 51.598 61 40C61 28.402 51.598 19 40 19C28.402 19 19 28.402 19 40C19 51.598 28.402 61 40 61ZM40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16C26.7452 16 16 26.7452 16 40C16 53.2548 26.7452 64 40 64Z"
          fill="#27232C"
        />
        <path
          d="M50.0088 33.5211L50.0088 33.5211C50.0166 33.5372 50.0237 33.5496 50.0317 33.5637L50.0333 33.5665C50.0418 33.5814 50.052 33.5995 50.0614 33.6215C50.0809 33.6671 50.0935 33.7212 50.1029 33.8089C50.1214 33.9812 50.1301 34.313 50.1338 35.033C50.1377 35.7792 50.1362 36.9486 50.1339 38.8015C50.1317 40.534 50.1288 42.8641 50.1288 46.0047V46.011C50.1288 46.1136 50.1288 46.2138 50.1077 46.3094C50.0852 46.4115 50.0396 46.5059 49.9535 46.6023C49.7887 46.7869 49.4709 46.982 48.8741 47.2745C48.1441 47.6323 46.9703 48.1474 45.0859 48.9744C43.8702 49.508 42.3587 50.1713 40.4798 51.0059L50.0088 33.5211ZM50.0088 33.5211L50.0079 33.5193M50.0088 33.5211L50.0079 33.5193M50.0079 33.5193C50.0004 33.5047 49.993 33.4894 49.9855 33.4739C49.9659 33.4337 49.9455 33.3915 49.9209 33.3538C49.8831 33.2957 49.8339 33.2428 49.7542 33.1839C49.6009 33.0705 49.3221 32.9259 48.7606 32.6676C48.1655 32.3938 47.2416 31.9873 45.7905 31.3488C44.4907 30.7769 42.7678 30.0188 40.4794 29.0033V29.0033M50.0079 33.5193L40.4794 29.0033M40.4794 29.0033L40.4791 29.0032M40.4794 29.0033L40.4791 29.0032M40.4791 29.0032C40.4673 28.998 40.4555 28.9927 40.4436 28.9873M40.4791 29.0032L40.4436 28.9873M40.4436 28.9873C40.387 28.9619 40.3294 28.936 40.2681 28.9197M40.4436 28.9873L40.2681 28.9197M40.2681 28.9197C40.1892 28.8988 40.1051 28.8933 39.9957 28.9092M40.2681 28.9197L39.9957 28.9092M39.9957 28.9092C39.785 28.9398 39.4674 29.0524 38.8823 29.3001M39.9957 28.9092L38.8823 29.3001M38.8823 29.3001C38.2553 29.5656 37.3071 29.9927 35.8305 30.6578M38.8823 29.3001L35.8305 30.6578M35.8305 30.6578C34.5385 31.2398 32.8418 32.0041 30.6015 33.0018M35.8305 30.6578L30.6015 33.0018M30.6015 33.0018C30.4928 33.0409 30.391 33.0887 30.3034 33.1701C30.214 33.2531 30.1464 33.3643 30.0943 33.5191C29.9923 33.8223 29.9425 34.3164 29.9188 35.1594C29.8915 36.1331 29.8989 37.592 29.9101 39.7983C29.9184 41.4255 29.9288 43.4593 29.9288 46.0047C29.9288 46.1204 29.9326 46.2305 29.9618 46.3366C29.9918 46.4456 30.0471 46.5456 30.1425 46.6465C30.3272 46.8418 30.6679 47.0457 31.2815 47.3423C31.9663 47.6732 33.0118 48.1287 34.6047 48.8226C35.8798 49.3781 37.5056 50.0864 39.578 51.006C39.7197 51.0697 39.8734 51.1026 40.0288 51.1026C40.1841 51.1026 40.3377 51.0697 40.4794 51.0061L30.6015 33.0018ZM38.9288 41.2897L32.1288 44.3109V35.6986L38.9288 38.7197V41.2897ZM41.1288 41.2897V38.7197L47.9288 35.6986V44.3109L41.1288 41.2897ZM40.0288 36.8053L33.7348 34.0047L40.0288 31.2042L46.3228 34.0047L40.0288 36.8053ZM33.7352 46.0047L38.9288 43.6985V48.3109L33.7352 46.0047ZM46.3224 46.0047L41.1288 48.3109V43.6985L46.3224 46.0047Z"
          fill="#27232C"
          stroke="#27232C"
          stroke-width="0.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_860_235">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const DigitalIcon = ({ width }) => {
  return (
    <svg
      width={width ? width : "80"}
      height={width ? width : "80"}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="10" fill="#DFF0E8" />
      <g clipPath="url(#clip0_860_580)">
        <path
          d="M48.1044 32.0834C48.0157 31.9277 47.897 31.7912 47.7553 31.6816C47.6136 31.572 47.4515 31.4915 47.2786 31.4448C47.1056 31.3981 46.9251 31.3861 46.7475 31.4094C46.5698 31.4328 46.3986 31.491 46.2435 31.5808C45.0754 32.26 45.8768 32.1106 44.1245 31.282V30.3583C44.1245 29.9981 43.9814 29.6526 43.7267 29.3978C43.472 29.1431 43.1265 29 42.7662 29H37.3329C36.9727 29 36.6272 29.1431 36.3724 29.3978C36.1177 29.6526 35.9746 29.9981 35.9746 30.3583C35.9746 31.7166 36.2598 30.9424 34.6163 32.0426C32.2256 30.6843 32.5516 31.0511 29.183 36.7832C29.0932 36.9382 29.0349 37.1095 29.0116 37.2871C28.9882 37.4648 29.0003 37.6453 29.047 37.8182C29.0937 37.9912 29.1742 38.1532 29.2838 38.295C29.3934 38.4367 29.5299 38.5554 29.6856 38.6441C30.6907 39.2282 30.4462 38.875 30.4462 39.8666C30.4462 40.8582 30.6907 40.505 29.6856 41.0891C29.5299 41.1778 29.3934 41.2965 29.2838 41.4382C29.1742 41.5799 29.0937 41.742 29.047 41.9149C29.0003 42.0879 28.9882 42.2684 29.0116 42.446C29.0349 42.6237 29.0932 42.795 29.183 42.95C32.4701 48.6414 32.1577 49.076 34.6163 47.6905C36.2055 48.7908 35.9746 48.0165 35.9746 49.3749C35.9746 49.7351 36.1177 50.0806 36.3724 50.3353C36.6272 50.5901 36.9727 50.7332 37.3329 50.7332H42.7662C43.1265 50.7332 43.472 50.5901 43.7267 50.3353C43.9814 50.0806 44.1245 49.7351 44.1245 49.3749V48.4512C45.8768 47.6226 45.0754 47.4732 46.2435 48.1524C46.3986 48.2422 46.5698 48.3004 46.7475 48.3238C46.9251 48.3471 47.1056 48.3351 47.2786 48.2884C47.4515 48.2416 47.6136 48.1612 47.7553 48.0516C47.897 47.942 48.0157 47.8054 48.1044 47.6498C51.052 42.5832 51.1471 42.5832 50.9162 41.9177C50.6852 41.2521 50.4 41.157 49.4899 40.5593C49.5306 40.053 49.5306 39.5443 49.4899 39.038C51.9077 37.7204 51.4052 37.8155 48.1044 32.0834ZM46.7461 38.6305C47.2487 41.3472 45.8768 41.646 47.8192 42.7055L46.4609 45.069C44.5456 43.9687 44.8444 45.327 42.3859 46.21C42.1208 46.3026 41.891 46.4751 41.728 46.7038C41.565 46.9325 41.4769 47.206 41.4758 47.4868V48.0165H38.6912C38.6912 45.8568 37.591 46.6582 35.635 45.0282C35.4221 44.8448 35.1575 44.7319 34.8777 44.7051C34.598 44.6784 34.3168 44.739 34.0729 44.8788L33.6654 45.1233L32.3071 42.7598C33.8964 41.8497 33.258 41.483 33.258 39.8666C33.258 38.2502 33.8964 37.8834 32.3071 36.9734L33.6654 34.6099C33.9316 34.8521 34.2737 34.9941 34.6331 35.0114C34.9926 35.0288 35.3468 34.9204 35.635 34.705C37.6182 33.075 38.6912 33.9307 38.6912 31.7166H41.4079C41.332 32.069 41.3813 32.4368 41.5474 32.7566C41.7136 33.0765 41.9861 33.3284 42.318 33.4689C44.9124 34.3925 44.4913 35.7373 46.3929 34.6099L47.7513 36.9734C47.4121 37.0846 47.1229 37.3116 46.9342 37.6145C46.7455 37.9174 46.6693 38.2771 46.7189 38.6305H46.7461Z"
          fill="black"
        />
        <path
          d="M40.0496 35.7916C39.2436 35.7916 38.4558 36.0306 37.7857 36.4784C37.1155 36.9261 36.5932 37.5626 36.2848 38.3072C35.9764 39.0518 35.8957 39.8711 36.0529 40.6616C36.2101 41.4521 36.5982 42.1781 37.1681 42.748C37.738 43.3179 38.4641 43.706 39.2546 43.8633C40.0451 44.0205 40.8644 43.9398 41.609 43.6314C42.3536 43.323 42.99 42.8007 43.4378 42.1305C43.8856 41.4604 44.1246 40.6725 44.1246 39.8666C44.1246 38.7858 43.6952 37.7494 42.931 36.9852C42.1668 36.221 41.1303 35.7916 40.0496 35.7916ZM40.0496 41.2249C39.6893 41.2249 39.3438 41.0818 39.0891 40.8271C38.8344 40.5723 38.6913 40.2268 38.6913 39.8666C38.6913 39.5063 38.8344 39.1609 39.0891 38.9061C39.3438 38.6514 39.6893 38.5083 40.0496 38.5083C40.4098 38.5083 40.7553 38.6514 41.0101 38.9061C41.2648 39.1609 41.4079 39.5063 41.4079 39.8666C41.4079 40.2268 41.2648 40.5723 41.0101 40.8271C40.7553 41.0818 40.4098 41.2249 40.0496 41.2249Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 61C51.598 61 61 51.598 61 40C61 28.402 51.598 19 40 19C28.402 19 19 28.402 19 40C19 51.598 28.402 61 40 61ZM40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16C26.7452 16 16 26.7452 16 40C16 53.2548 26.7452 64 40 64Z"
          fill="#27232C"
        />
      </g>
      <defs>
        <clipPath id="clip0_860_580">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const CreativeIcon = ({ width }) => {
  return (
    <svg
      width={width ? width : "80"}
      height={width ? width : "80"}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="10" fill="#FFFAC9" />
      <path
        d="M50.0838 27.275L50.0854 27.075C50.0472 27.0746 50.0093 27.0741 49.9716 27.0735C49.8067 27.0709 49.6464 27.0684 49.4862 27.09C49.2798 27.1179 49.0738 27.1844 48.8233 27.3263C48.3359 27.6025 47.6596 28.177 46.4415 29.3475C45.0784 30.6573 43.0146 32.7361 39.7438 36.0305C37.1478 38.6451 33.7916 42.0256 29.4221 46.3951C29.2571 46.5601 29.1723 46.738 28.9634 47.3457C28.8547 47.6617 28.7091 48.1058 28.5008 48.741C28.3037 49.3423 28.0503 50.1149 27.7191 51.1121L27.7185 51.1138C27.6508 51.324 27.6423 51.5488 27.6941 51.7635C27.7459 51.9782 27.8559 52.1744 28.0121 52.3306C28.1683 52.4868 28.3645 52.5968 28.5792 52.6486C28.7939 52.7004 29.0187 52.6919 29.2289 52.6242L29.2308 52.6235C30.3971 52.2348 31.2544 51.9539 31.8887 51.746C32.423 51.571 32.7991 51.4477 33.0684 51.3555C33.3618 51.2551 33.5417 51.1872 33.6659 51.1252C33.7992 51.0586 33.8698 50.9982 33.9449 50.9233C33.9882 50.883 34.0249 50.8492 34.0559 50.821C34.0816 50.8132 34.1053 50.8032 34.1128 50.7987C34.1259 50.7903 34.1354 50.7819 34.1356 50.7817C34.1403 50.7777 34.1441 50.7741 34.1451 50.7731C34.1545 50.7642 34.1786 50.7398 34.2219 50.696C34.2386 50.6791 34.2586 50.6588 34.2824 50.6347C34.387 50.5288 34.5647 50.3488 34.8569 50.0537C36.292 48.6045 40.4884 44.3798 52.3324 32.5358L52.3325 32.5357C52.7784 32.089 53.0823 31.5204 53.2059 30.9013C53.3294 30.2823 53.2672 29.6406 53.0269 29.0569C52.7867 28.4732 52.3792 27.9736 51.8556 27.6209C51.3321 27.2683 50.716 27.0783 50.0848 27.075L50.0838 27.275ZM50.0838 27.275C50.6755 27.2781 51.2531 27.4562 51.7439 27.7868C52.2347 28.1174 52.6167 28.5858 52.842 29.133C53.0672 29.6803 53.1256 30.2819 53.0097 30.8622C52.8939 31.4425 52.609 31.9756 52.1909 32.3944L33.8062 50.7792C33.6156 50.9697 33.5263 50.999 31.8278 51.5555C31.1944 51.7631 30.3372 52.0439 29.1675 52.4338C28.9924 52.4903 28.805 52.4973 28.6261 52.4542C28.4472 52.411 28.2837 52.3193 28.1535 52.1892C28.0234 52.059 27.9317 51.8955 27.8885 51.7166C27.8454 51.5377 27.8524 51.3503 27.9089 51.1752C28.2412 50.1749 28.4946 49.4019 28.6916 48.801C29.3038 46.9338 29.3709 46.7291 29.5635 46.5365C47.1691 28.9309 48.311 27.396 49.5819 27.2805C49.7372 27.2663 49.8944 27.2734 50.0838 27.275ZM49.5553 29.6667C49.7225 29.5333 49.8583 29.4804 50.0801 29.4831C50.2353 29.487 50.3861 29.536 50.514 29.6241C50.6421 29.7125 50.7418 29.8363 50.8006 29.9804C50.8595 30.1245 50.875 30.2827 50.8453 30.4355C50.8157 30.5879 50.7423 30.7284 50.6343 30.8398L50.0696 31.4045L48.9376 30.2724C49.0013 30.2076 49.0595 30.1477 49.1133 30.0923C49.2967 29.9035 49.4289 29.7674 49.5553 29.6667ZM30.7566 49.5861L31.3222 47.8891L47.2412 31.9701L48.3726 33.1015L32.4536 49.0205L30.7566 49.5861Z"
        fill="#27232C"
        stroke="#27232C"
        stroke-width="0.4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 61C51.598 61 61 51.598 61 40C61 28.402 51.598 19 40 19C28.402 19 19 28.402 19 40C19 51.598 28.402 61 40 61ZM40 64C53.2548 64 64 53.2548 64 40C64 26.7452 53.2548 16 40 16C26.7452 16 16 26.7452 16 40C16 53.2548 26.7452 64 40 64Z"
        fill="#27232C"
      />
    </svg>
  );
};

export const DownloadIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 22.6667V13.3333C4 12.5333 4.53333 12 5.33333 12C6.13333 12 6.66667 12.5333 6.66667 13.3333V22.6667C6.66667 24.1333 7.86667 25.3333 9.33333 25.3333H22.6667C24.1333 25.3333 25.3333 24.1333 25.3333 22.6667V13.3333C25.3333 12.5333 25.8667 12 26.6667 12C27.4667 12 28 12.5333 28 13.3333V22.6667C28 25.6 25.6 28 22.6667 28H9.33333C6.4 28 4 25.6 4 22.6667Z"
        fill="#707070"
      />
      <path
        d="M21.3334 9.33333C21.3334 9.73333 21.2001 10 20.9334 10.2667C20.4001 10.8 19.6001 10.8 19.0667 10.2667L16.0001 7.2L12.9334 10.2667C12.4001 10.8 11.6001 10.8 11.0667 10.2667C10.5334 9.73333 10.5334 8.93333 11.0667 8.4L15.0667 4.4C15.6001 3.86667 16.4001 3.86667 16.9334 4.4L20.9334 8.4C21.2001 8.66667 21.3334 8.93333 21.3334 9.33333Z"
        fill="#707070"
      />
      <path
        d="M17.3334 7.99999V20C17.3334 20.8 16.8001 21.3333 16.0001 21.3333C15.2001 21.3333 14.6667 20.8 14.6667 20V7.99999C14.6667 7.19999 15.2001 6.66666 16.0001 6.66666C16.8001 6.66666 17.3334 7.19999 17.3334 7.99999Z"
        fill="#707070"
      />
    </svg>
  );
};
export const VideoIcon = ({ width }) => {
  return (
    <svg
      width={width ? width : "80"}
      height={width ? width : "80"}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="10" fill="#EBFFFF" />
      <g clipPath="url(#clip0_46_2010)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M61 40C61 51.598 51.598 61 40 61C28.402 61 19 51.598 19 40C19 28.402 28.402 19 40 19C51.598 19 61 28.402 61 40ZM64 40C64 53.2548 53.2548 64 40 64C26.7452 64 16 53.2548 16 40C16 26.7452 26.7452 16 40 16C53.2548 16 64 26.7452 64 40ZM50.6029 41.9485C51.4412 41.5294 52 40.5515 52 39.5735C52 38.5956 51.4412 37.6176 50.6029 37.3382L37.3309 27.5588L37.1912 27.4191C36.3529 26.8603 35.2353 26.8603 34.3971 27.4191C33.5588 27.8382 33 28.8162 33 29.7941V49.3529C33 50.3309 33.5588 51.1691 34.3971 51.7279C35.2353 52.1471 36.3529 52.1471 37.1912 51.7279L50.6029 41.9485ZM49.0662 39.5735L35.7941 49.3529V29.7941L48.9265 39.4338L49.0662 39.5735Z"
          fill="#27232C"
        />
      </g>
      <defs>
        <clipPath id="clip0_46_2010">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(16 16)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="#27232C" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3598 12.8715C24.0387 12.8715 24.7454 12.8715 25.3827 12.8715H25.6598V9.36613C25.2996 9.36613 24.9255 9.28299 24.5514 9.26914C23.8586 9.26914 23.1659 9.19986 22.4731 9.26914C21.4343 9.26676 20.4193 9.5809 19.5635 10.1697C19.09 10.515 18.6904 10.9515 18.3882 11.4536C18.086 11.9557 17.8873 12.5131 17.8039 13.0932C17.732 13.5888 17.695 14.0888 17.693 14.5895C17.693 15.3654 17.693 16.1552 17.693 16.9311V17.2359H14.3401V21.1292H17.6653V30.9248H21.7249V21.0876H25.0363C25.2026 19.7991 25.3688 18.5106 25.549 17.1666H21.6972C21.6972 17.1666 21.6972 15.2407 21.6972 14.3956C21.7665 13.2456 22.4454 12.8992 23.3598 12.8715Z" fill="white" />
    </svg>
  )
}
export const LinkedinIcon = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="#27232C" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2407 16.6262H11.0842V30.0381H15.2407V16.6262ZM14.5548 10.3637C14.1543 10.099 13.6842 9.95911 13.204 9.96185C12.5634 9.96552 11.9502 10.2226 11.4985 10.6769C11.0468 11.1312 10.7932 11.7458 10.7932 12.3865C10.7932 12.8667 10.9358 13.336 11.2028 13.735C11.4699 14.134 11.8494 14.4448 12.2932 14.6279C12.7371 14.811 13.2253 14.8582 13.696 14.7635C14.1667 14.6688 14.5987 14.4365 14.9373 14.0961C15.2758 13.7556 15.5056 13.3222 15.5976 12.851C15.6896 12.3797 15.6396 11.8918 15.454 11.449C15.2683 11.0062 14.9554 10.6285 14.5548 10.3637ZM21.9051 16.6262H17.9009L17.8732 30.0658H22.0298V23.4291C22.0298 21.6834 22.3761 19.993 24.5376 19.993C26.699 19.993 26.699 21.9882 26.699 23.5538V30.0381H30.8555V22.681C30.8555 19.0647 30.0104 16.2937 25.8538 16.2937C25.0597 16.261 24.2718 16.4465 23.5757 16.83C22.8796 17.2134 22.3018 17.7803 21.9051 18.469V16.6262Z" fill="white" />
    </svg>
  )
}
export const VimeoIcon = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="#27232C" />
      <path d="M30.2736 15.2407C30.0935 19.0925 23.055 28.8743 18.9816 28.8743C17.7901 28.8743 16.7648 27.7658 15.9473 25.549C14.354 19.7437 13.6473 16.1552 12.3034 16.1552C11.7208 16.3935 11.1786 16.7207 10.6962 17.125L9.72632 15.8781C12.3034 13.6197 14.3817 11.486 15.7533 11.3613C17.3605 11.2089 18.3443 12.3034 18.7045 14.6311C19.1756 17.6238 19.8683 22.4732 21.0599 22.4732C21.9743 22.4732 24.2604 18.7184 24.3713 17.3606C24.5791 15.407 22.9858 15.2962 21.4755 15.9751C22.487 12.636 24.4128 11.0842 27.2809 11.0842C29.4007 11.0842 30.3983 12.4697 30.2736 15.2407Z" fill="white" />
    </svg>
  )
}
