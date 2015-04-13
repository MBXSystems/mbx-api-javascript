/// <reference path="../typings/jasmine/jasmine.d.ts" />
/// <reference path="signature.ts"/>

describe("Signature", function () {

    it("is defined", function () {
        expect(Signature).toBeDefined()
    });

    describe(".forRequest", function () {

        it("computes the correct signature", function () {
            testData.forEach(function(t) {
                var credentials = new Credentials(t.token, t.secret);
                var signature: ISignature = new Signature(credentials, CryptoJS);
                var requestConfig: IRequestConfig = {
                    method: t.method,
                    url: t.url,
                    body: t.body
                };
                expect(signature.forRequest(requestConfig, '2014-10-03T17:16:10.444663')).toBe(t.result);
            });
        });

    });

    var testData = [
        {"url": "b7bc229f484b49fb951480ce550fc0dd", "secret": "3b4cf73194384e508eec63c36beb37fe", "method": "c6dd155441a941a184731fc8f46f4b38", "result": "uWbIAri17VK9o6G24lmEzzktLHA=", "token": "50473f63a95a4c4da18b14eeaab3e317", "body": "0406d4c37aab4d80834d53bb98a8bf14"},
        {"url": "533246ea413e4fb5b02f2c56d84d8cb0", "secret": "37a7c439b6e74df292cbb5bae576a1cc", "method": "27b04eb18bab460c8bcb3907efd95f2d", "result": "qK6hTGZ56puYsz/PAj+9QnILtFI=", "token": "b8b9184afa974a738389c0bffcc18d62", "body": "24eaeee1944e40b18195173bfdf1d77f"},
        {"url": "f847794202964c5fa144125b07024c72", "secret": "56a4661e345a44b29e6b33504c2d88ad", "method": "9e9fe5461ea343f6b5cbdd6e331f7d5d", "result": "Xwl2tYETwfju94MD9skAfH2ktNE=", "token": "3ad5a52905e34b60a89a607cbd325a3d", "body": "4e2110a653fd4d2c839c7f9294a44690"},
        {"url": "5fc8a96673154492bd7bcf061a42212c", "secret": "4104e51731ca45f1ac2b413905a39b59", "method": "a229ccf74a184474a9dba43fc474f390", "result": "DABqNDDoMJPR4y7cgLUtuFVU50I=", "token": "887b8013d4b24f60b7ac92a595d9ed7b", "body": "a0c36674bc10493f9cc77fd1637b6327"},
        {"url": "a36563c6a1f04822ba0b4cbc9b804ecb", "secret": "f24a22c0797043708cdd7bd2a9c39abd", "method": "94727c9957a2407981d94839be013932", "result": "eFtfyV0zCJVlvd6vUlpgQBs50zc=", "token": "0e370c0f0322433685920c6a81b0365e", "body": "75a827c69eaa411990da61c7a34bff80"},
        {"url": "41a00bdc30c040abb7a3d889ea6fcf97", "secret": "4b6380718acb44709f1b78426664ff83", "method": "fa723bac00944bb49e8e78bd364ad0bc", "result": "7Dz/UVmso4F/+/+Id93Xp7Z1e1g=", "token": "904483c562cd4314996a7a527b3ba2f7", "body": "f224c0ec0fd94c959aaa6c2e8b3844d4"},
        {"url": "1245c0e8d61f4d2db8b6e3272cd6d729", "secret": "351ee5af7b28403fba03eed50098cbfc", "method": "6fb6719cf408400bb8d0320c3db51cf0", "result": "p80cp5+YfC2jmTYUfFiEjfyNl8U=", "token": "0b6dc689567d4e87b20f67119f7c1a45", "body": "f0bc1591a7fd420abd9322b81647eb02"},
        {"url": "e57bb404100a44cdbf5757a724076860", "secret": "5084735aa3d8430bb0bddad56ef847a2", "method": "6fbfe568454a44558c2991adeee16281", "result": "gbW1ES9Y+azhHzdAjvsdlrm+6JU=", "token": "e822e49c138b446faf727bee99d226cc", "body": "f606607e805a41b6a0b7e6f84ae5c880"},
        {"url": "9b2b50aa7b1746cd98b3ec945a6ccf5c", "secret": "cf4f5a655015408183783139c9320ee1", "method": "3ee2cf70d4464fec8524622ab53049bb", "result": "Logb1lMy66uJIiOqAxc7Rt/qLS0=", "token": "fec9aec30eb94de4a25b5b65e9caa5de", "body": "dea541c1b6584687a399e93be33e4c40"},
        {"url": "d99f3ae95d9446bcb03cc5f1d85db37d", "secret": "e5c1ca1cf12143359845c12e2f2f04ea", "method": "4522a4af20d4459887130760bacc2a84", "result": "G2vD/OcNH2xiHFSXvnfPAzDZsRw=", "token": "4b750f2468b94119ae2d4de86fb8a76e", "body": "9990a3dac9624eff90e66feaffc6a030"},
        {"url": "51aaf14d58d44ed59c1f46d2a67de5b2", "secret": "b9f94980d44d48be8d3c5e4fa137829c", "method": "9b553a5b37dc434abcb49705919f8709", "result": "OItGJbNwf0RmgWKjQ25IsG+79kU=", "token": "a6b04ba30ffc452aaf5dfe107cfafbe8", "body": "accbd17586db4f5b8f847ed4d6dfa0c1"},
        {"url": "aa223506d4de4b5fbfe0ce7dcd3085fb", "secret": "da40109f11a44c0397f921135d71c449", "method": "15d78e333a3f49feaf19235c555947ae", "result": "xllq0wuOfTho90Dl6uNQ9lIO9Ho=", "token": "f107e5cfddaa4b7ca1116396226729b8", "body": "4fd39ccae297481b969c9c2448c54b1c"},
        {"url": "286fb31258eb49f5970381f12e29e63c", "secret": "af7546e292784f92a58d0d2da016b178", "method": "2164cf673ea54617b78a184f075bd36b", "result": "04ZgKRXGn/M7z1ntGwyymltCWt4=", "token": "3387bee44bf54ea2a66cc413ef023c16", "body": "abb9bf66edf04444bce7aabfa96cb1f2"},
        {"url": "ce75a016777f4467b441381c58798d07", "secret": "f47c8053b2a94b1fb53a845eae709cbc", "method": "bf6766f0eb614bd2a0fa99b7a1365e26", "result": "NDDwrP+MFmExKq7fjKM4TEfkC0o=", "token": "59f44414cdd14723892462abca5a2da9", "body": "e362e44b1783432ba195163328666b9e"},
        {"url": "e1a62ffdb7264d16ab65fff953b16495", "secret": "cdabf481dfd844b2913cc98727e65f18", "method": "7b36926788e24d8584c9ebf7203e9347", "result": "mywMpgjiyQQvTE7/ULbUk8prRJI=", "token": "c9ea080514804a7eae313f635d4943ae", "body": "43a9e01d76eb429e9fc76af6255fc210"},
        {"url": "eb188ea0d93548d39175993e3d101cec", "secret": "374be006cc06455cb36b64c0fd22cc27", "method": "25bd0bf24df542b2b89daa170acda399", "result": "WyB6uB+kFEGJnO2H6TK3yLchlBQ=", "token": "34a174c7a8084cb89c6c89fc07bdf461", "body": "7ed5d34bf0d8444d9a42db6cc11746fc"},
        {"url": "d52103aac14645b29d55649694fba87a", "secret": "0095f554592d4a61a92bef82ddb18628", "method": "9a3239ed0c86479a8a0f314dc92bea21", "result": "rqg5MHCwomDWICvXHYTXXSrM5Ug=", "token": "7bc12cb295c54c6b95c7997ba3ec34c9", "body": "0eee266df9ca4e9cae4a3d8e6d35c909"},
        {"url": "90f75c9538fa48d68ab70aa5cbbee9c1", "secret": "f4bac19d7b074f66a824d3b83ac2edb9", "method": "9a7230050d7d47a980ecac2caf0efdee", "result": "HmUSGFFFjbo2Is/oaDSuf+7Tt5U=", "token": "24fc5d1a9b8a4fcf9a7525071b5344b1", "body": "9f86b30be7e1431992ff1da53e5d005a"},
        {"url": "30ff8678a00842709c531bff1f086a17", "secret": "6ee601abc60a48e3ae8507a5a173eec5", "method": "147de88188b343599a231283f82751e4", "result": "zPjhPt9cFGqNbCV+InJbSiiL5Fw=", "token": "782da9ed755b4c05bda6e598bda334cb", "body": "d5b2985b33534f1f84fbb6128c5c1136"},
        {"url": "ba58844cbba14427b3cf9d826359aff9", "secret": "b59fdcd9c4534166930d1f33c5a60772", "method": "f77e471d1ca14d58aadc98b420301219", "result": "LOvoEcQ6L/BM8eSsdu/OZLfJ604=", "token": "a57c8873c3704b6a912ae226e6727c01", "body": "718d5c7958d449a58cb74ce6a0099b36"},
        {"url": "2ff24078c99f45d8a49c490e63631ea3", "secret": "80249a735c684e1ea790fc590948ee57", "method": "8951d029746849e68824cf2e22640577", "result": "hnXA3qp3D3RC9z0E/vNVr6dNXP8=", "token": "c00625cd022e4c229728fc3b70abf0a0", "body": "e11c465c9b9c4f9ea12030666d4cb24f"},
        {"url": "c00664add43a44eea04463314de9df83", "secret": "ae500a6383854b618200926cbbd13626", "method": "43afb5a41d254e7ead5587a8e656e65f", "result": "iGqJSlP3ZaH1F+h/4fDpkG9M3Kg=", "token": "c9862f9b90ff47d58511b98c92b6b58a", "body": "257ea23f816d437ebc9b165f35fe823d"},
        {"url": "b53191632173408b90726b2672cfe807", "secret": "d69b2d271e0245a2bf488c48865c7c15", "method": "67c88e8c5a7d4f7881a5790f253692e6", "result": "6XPb6NT2eB889LEEViAfd+hiF9E=", "token": "568d1476d29d44dfafe76c5f15127875", "body": "4fa2e3c922154fcdbfff033692100fec"},
        {"url": "dff3594338154da98d3075d64ef2137b", "secret": "4aa8584e1ca945d792434cbf76d08299", "method": "fd44f94e42f34df1b12bf74810516bea", "result": "IIrDq/mJeDgwgAFMGxUZyc1TfCE=", "token": "5907abba6bd94d96871f44305319fb92", "body": "c705a4093a2d43c1ada3ad8bbc8a843f"},
        {"url": "3daa40e2168d402f99d744c663bb029f", "secret": "45e563b7f78b42648aeddecf3c4396f5", "method": "eaf37a2703c345c5a5dcfd9fdb5ceb32", "result": "lSywcOKUp5sW6iDnDlNr/vmyTgE=", "token": "8cc6234830294ea6b64452a4309cc049", "body": "13484280f75d4d1c800acc72522a53e9"},
        {"url": "9008b9b1a5944c75971f583267e82f6b", "secret": "a9d83b54fe144f27858055a9c16fdd47", "method": "ec2c2e290cc94c46ae12533fb4e815a4", "result": "qVZ//jMg9k5VkFBIhMO0bv3MEbg=", "token": "2154871fe49342a0ade888c3d159715b", "body": "445613c2651e427db8830e6206e712a3"},
        {"url": "84aa7774a39343ea921522917dae3b74", "secret": "46bea3c9be884c9b85b4905e5ae87dbc", "method": "7be8a66d7430420693037093ef4eb360", "result": "vYLIybKnPf+IkYZPWVi+6SEf71Y=", "token": "bdaac1ef223245d79fcd48140ed8155d", "body": "268762cbc5974c7996702fa46c0d88d8"},
        {"url": "4feb2a97d1aa41ca84436a3ebe845af3", "secret": "cc4d81abd6744a42a1b8bff983cac9fd", "method": "e48452a77de449a0b2ea92994acb2550", "result": "ssG3FWeZmabZ2SXypVHLQBGul48=", "token": "21915bb335ad48a1b6469f6280407f26", "body": "c7daea524df44e99b1c8dd793b7accf2"},
        {"url": "65585b92024f45f1be93ab268a052db6", "secret": "c8100b5113b043119010f50acc00a4d8", "method": "f2cca82ecdf148b1a7cda4be414edcea", "result": "fnDWyQQYfYlNAd/fgMqvrc3Kuyc=", "token": "f534dde576c84de29f42777bb3813859", "body": "8a5276c3fd324c0d8677f2c744242048"},
        {"url": "b9c73dbfb3f147e7a75e989f2ca78f75", "secret": "4a688397305d49cfa17f784bda828199", "method": "b1b8bd8f5e6a4b5fbd17acf3971a2936", "result": "Gl6GmF1jaNFtPbZJc2EU3SAQPJI=", "token": "eccc09772c58440f993280194064306c", "body": "25781089755b49068146e7db44470860"},
        {"url": "84fbf4d8432c4536b985cdcec174afb0", "secret": "b0e6c38566864af9a5a4b190b9674633", "method": "28c01cf939ee45789d99e66a4574394e", "result": "KheJCtc8O3SMOwLYNuhBRBc4r1A=", "token": "356bbc357ec343998550c81b333ed93d", "body": "d57fd911f424410ea36a442bbfafad1e"},
        {"url": "a8d87b84e7eb4207a6f6b4155c85acdf", "secret": "f1fccd97409b471e9618e52123e0f0bb", "method": "9f7aeab00adc4a04b738dd1e96686b23", "result": "f0ENjoPm6DeIeidsjqzQw6db+QE=", "token": "a6e597185d3c43dd8230bc84abc03b5b", "body": "b4863bbcabcd4d4a927aba61a8e84657"},
        {"url": "136a6d79ebc14ac98b1555b2cbeb913c", "secret": "03c4e1d900ac4b88aff827f1cae350d3", "method": "f24f3c8885e8403693b1c57f47c11667", "result": "XLaYbg7chjEv/V0dniYo/I+Zu9U=", "token": "0da3987f8757451987fb7b39bae55b23", "body": "2dd1057dcce84d58870e33625795784f"},
        {"url": "fd42892cd8c241678567a32ceec979eb", "secret": "e34197b38f784016ad9b99ca9ee69bd6", "method": "36a3245e2d834fe0bc9c14e448c4cba9", "result": "8m0WklW5a4a0BaFihCXAnFfAaQU=", "token": "95a376c1cfed42b58ee421c953727744", "body": "0f42fa8a3a9c4dc0b3ae257c15754db5"},
        {"url": "f3e7a97de337491a895409bc6ca288fc", "secret": "ec494c5637384ca8a6e92effd908461c", "method": "1e73ab6f5e6a4f03bef0be5db9521b78", "result": "lR9/nvXLxFzp11s3EDFsxQKW3d4=", "token": "76f1f544672143c0ad3450f34f667824", "body": "6e148322fa5248e0973d835a1083a864"},
        {"url": "b4a35bacdf4f4854bd88eadfc22625be", "secret": "d4ec52f99be14a77a07c4b098c22bba2", "method": "7f989f43f9f74487ad31fcae1cec5832", "result": "o9RklehDpDY6cLTcp3IPpmRqQOM=", "token": "2950f9c90e3f486bac654cb15a324808", "body": "2767f8b0c18b4810845a65a69070a97d"},
        {"url": "ca0c58b54d4e4fae9bf255adace8ee1d", "secret": "81e1b1c97be94f25a41962d9dfe14f53", "method": "11f0a2d1267e4f8f9e7c7d2a01616f2b", "result": "6LRaI6qUHI5HKtPWJSzug5LMhfs=", "token": "c789574bb2d84686abc33c10f1f559ee", "body": "8b1ea2a78eee416182c8a7a8193fbf02"},
        {"url": "30c6bb81e7d14bdba21924e0be9c4d06", "secret": "54d5686fc9614e05aff2b392cc99db24", "method": "693781a7b2114e448782806b16a1e420", "result": "6CVafpUklgNEQA/rrXYetVJk7wU=", "token": "5e3d54f81de246f08a0b49f3592bd7b7", "body": "642b8fe2b9d6454eb26caa754ae76387"},
        {"url": "1db6ce410dcc47b186976a303166914a", "secret": "33606f67c7d2484fb0c5687c88169c6b", "method": "b346298ae3404a19abd6c5bbe7cad013", "result": "JiZchfKH6Ohv/0vsfqUfWHn6+3E=", "token": "33cfd74be90a4df182abd5101b5515e0", "body": "6c7bae44a98645ae9bdb68ea8f8a6e55"},
        {"url": "1bf4bd7e6c54412e83ef1e48d559fe89", "secret": "d3e5cfbc1a224b15af9c92e44aa74ccb", "method": "52e142f71fd44343b11de3b839a838f7", "result": "A8ttE325Sb+bZOpFr5tM45JTgg0=", "token": "0f17113885164d39b08bc24d273dd138", "body": "ff58060968b14bcab4c7cd09e6cff4a1"},
        {"url": "5cc7a1489722487dbe46563e5db2c2f7", "secret": "598c252b02c84e01986fce00f4911dd4", "method": "a90e416e9acc4d519c24494c5437e9ce", "result": "kGC7w9/IeNQ/Jb52JQHunKzB8pc=", "token": "98da95aef5534c8fba357ae226035386", "body": "dc0fdccf01724a1483a56eb33404551c"},
        {"url": "44f26f1e3bdd4822a789a46b1fb6a3c0", "secret": "742020c7bd8746a39cd827a5a44190f1", "method": "67976952038c44cabe13af0e5055440f", "result": "WMUzn8RYlOJDZ/vxJdGUWoDfAMI=", "token": "02797825729246db8eee5816115a97c1", "body": "7f8a8ece79b84994a11ed6d36a76df6a"},
        {"url": "95af9b771498497ba8fc8d6239c7349a", "secret": "2ef503d7f173443f9266752e6850c278", "method": "4df044e6552c4a25bd9b4f5d6fecdbae", "result": "YuAbOmUKZGlkm6wDvfadV6kFfkU=", "token": "71c7dc54fbaa4ed888cfc701c12a8c7b", "body": "ba41ea3767624544aec8e1333042db65"},
        {"url": "c11b73ef8c3a4e8ea325e1484303f71e", "secret": "5e0059f5e2ff4001b05112d56625815f", "method": "c6ad9942a19b417cb0e7c8df2479d77b", "result": "GxpjsCyTDZLYh1RwXwfhE8HiXpE=", "token": "082e352648a54b3b9fb32fe9e8219fd4", "body": "114faae0c1ed4b3db8e6b76d2dde5e57"},
        {"url": "939c5c141e8c48238edfdfe74b859619", "secret": "f317c90e30c642819e097ea2403a5918", "method": "e55f1f5f8365408797412e3bff6cab7e", "result": "FdBHtxCG/nYk8sdj21NGTAOIuI0=", "token": "596c11d21ca54e3593874c8308d5165f", "body": "ea305861441c4a9e836b350add143cc1"},
        {"url": "7b612ed61584499d9e4e4a68e998d17f", "secret": "2ad3b0049a364641933eb316cc5fc001", "method": "6b4248927ab44ac2b04ee3e37103ae0c", "result": "ysEcC2PxSYNcD5E/UTZi1lrTnfA=", "token": "f2f7faafde5c46cfbe908c207a36830f", "body": "0bb1ed850eba4fa2970e3e74f6f32a95"},
        {"url": "d5f23924550a42d085bfc87c84092eea", "secret": "702602153b524640a6626fec68dce304", "method": "bba2d3a53c49416781626a01f87aa3e4", "result": "elN1WqpPI5ORF3ZgYvfmUQu1JBE=", "token": "09369aa0b1254faebce45bcfa4731cad", "body": "bba044f241c240e1924f68bfb258a249"},
        {"url": "46a6ee2640254308a9b7f73ed95d2f7c", "secret": "180a391146d349d1bfcfad265efc8b42", "method": "586f79f57dda46e1bd91b497bfa83736", "result": "cEKyINZBgZVE45TIczBLvHeWz+I=", "token": "bfb63c40420344d5b89ef4885a2f3751", "body": "4eceaedcb8b5495497a7939cf11a4cfc"},
        {"url": "da7a8eebd7774cecbf4f81cb72090beb", "secret": "fe8ad8ef2707444c90e9253c27800e6a", "method": "5c4127a74fc544a08e2126aeb6b42e65", "result": "ozqQNiMdQDnaR/sNPrB6jk+jR5Q=", "token": "12ba2c0b2de44d02afb6b01d97c8500e", "body": "c7685cb5a9b74104b51c4ec6bc7fb484"},
        {"url": "4936e0c8195e4a6a9724ac7f720dcf15", "secret": "cc9159105ffe47ac9386826ab3347325", "method": "ddbb20e036704455bcd9dd2b3c393018", "result": "CPZFMnnQwW1MmWpEHrdqlCG8Dt8=", "token": "29f5d954384b4f0a87c8627828308484", "body": "7d33ddc5f0464ee888d9d64bcb5b63c9"}
    ]

});