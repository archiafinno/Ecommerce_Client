<template>
    <div id="tableProduct">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Stock</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhITEhMWExUXFhcVFRgYGBgXFRUXGBUWGBwXFRgZHikgGhslGxUWIzEiJykrLi46Fx8zOzMsNygtLisBCgoKDQ0NFQ8PFy0ZFR0tLS0rKystNSsrKy0tLS0tLSsrLS0uLS0tKy0tKys4Ny0rLSs3Ky0tLTc3LTcrLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUCAwYHAQj/xABBEAABAwIDBAgCBwcEAgMAAAABAAIRAyEEEjFBUWFxBQYiMkKBkaETsSMzQ1LB0fAUU2JysuHxB4KSwnOiNGOD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQEBAQAAAAAAAAAAAAAAABEBIRL/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFT1+sLGvqsDHuFItFR4jI1ztGzMk+StMPXD2te0yCJCDYiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPP8AqzVzYHpPP32165fvkU2OB9R7K96hYgvwt75XuHs13/Zcf1iJw2PxlBsinjsPmOXVhu11QcvpP+TVW9ZsZVo4KnVwByNo/Wtb3gyB251MG54OJ2LQ9lReGdV/9YazHBmKaKjNpFnj817D0N05QxTA+i8OkTHiHkpBZIiKAiIgr+kukQzstMu9Y5qjPSdUHvHhJtzPt68FweJ6p0m1nup1q2Y1HPLw5wdBc50GGk3iNuitRi6uGj4pNWlftwfiMvEmB2hpeNu1azB2eC6dOlQSN8QfMeYV7SqhwBaZBXDtc0gOaQQRIIuCNdnAn2Uvo/pB1J28eIb+W46+ybg7BFrw9dr2hzTIP6grYsgiIgIiICIiAiIgIiICIiAiIgIihdKY0UmSdqDiOvrJxOewy0hTDjG0uqON7QA1vGzlyFLpKpQeHRINnalpB1BnXUbPxXW4uo6qSKhvq1w1E2kbxvCqsZ0frmF4JkAuBtVIIJhuwW8jsKuK4brP1fZTacTh6efDHvtHewzt1r/D3HZodipujemn0HZqFQj5+Y0PNei5H4d5NIyJLYsTGdzcpbtbGy0TtvFHjep+ExX0lBxwjyJygfEw5PBoh1P5C1lRbdB/6t12w2qwVBv0IG8yfxXd9F/6kYOrAc8NJ4/mAvFa3UPHNswUa7ZtkrMGzX6TLC+0Oo+MJh4pUb+Osw+gpl5QfobB9ZsJV7mIpu81E6z9NsZTLGOBc4XIIOVh28Z0jW68s6I6r0sMWvqP+M+RlzCKYcYENZOZ7r2m38Mro6FE1SHOPZ7zQYJd2bPffW4/UQhH2hSkZnCCYMGLCNLzsc4evn8/a2BuWpHaOQyW3dBBEAzPZn++k8vAv+th37j+rKFiaDXmHSQYB1iZc2R27EH5+Yo2YUUMOMglxcZbTBkjWzATDRrEnhwW52Kqu7rWMbszEut2dYho7wuC7Q6qJ0bhRSHZDpMEk5pNmkTBOkEeg52TAAb2GhOhtImSBfK7faLXlVIx6LrVmvJziAJ7Ic25uMzSTs5arreiemW1uzBY+M2U7R95hFnC45Suc/ZiGua3xEnMY0JvEDdpPqVjUxDKfZdUAcRoCQ7/AGhtxrsvpdTcqO4Rcn0N1jkuaXfEa0jM6ILQ4SJ3kC/Ijmenw2IbUbmY4OG8LO5FbURFAREQEREBERAREQEREBcx14rhrGDiSeRt+uS6dcL1yxGao4bob6a+6CuwzwRB01BGrTvH5KWGB30dQDaWmx1BbnZO2HEecFUeDLmmNRqOHBXOHeHDK7TUEatO8fq6qteJwzmOvduaQZ1HxKeozCO97bdHVD+jGPykSD2BLDBsKIuQHjbU1O2Z2t6mjXLew863BaS3MARdpBkcRsWGOwYfsLiRZwzOuRXi5Y/Qmn/ixI5aiwsjLUvGjg0unKzXtMOrx4d3Cd7n69stBnQZdc29sbG7dp5mbicEc0U3A3sMzQQZbHZzD97SPd+YVbVpFvhyTpLcuuWNWs2GmNdhCqp2GawGW3O05pNj/NpLRbjzUqpUjSffkN/D9TNXg2vd9WHP0iMzhsiSC7+C/EnepbMGXRmIbMAA2dJyhvfpi8uo+264a6lWdZjkdPNn3an/AK/zLBpJ5nlqRvNL95T/APadzRNpUqWwNc0xJzUT2XZd1UfZ4jd9lN+zmz/bY8QzWMNDoDrOuG4gj62k8RufEkZi4I1N7dRl3juf+QAdjcX7d5mSSt9fNkHwarabqbgTMZHsDc2U5T2TlIMkaQp9N2YB0PLRcSKubKx+YfaGZpVY0uWaWDRqrUHMIBLiNCfpfC4sPivYtM7dbxIqPge95OdwaNMrSLag5iHTOaNkQQInTdSwoiGtgHYBGsnSGjQu390G5Wpub+LYPH/LIlp2gEcydNccVijSp/F+G53abmDGy5uZ0SBkkhrgTptJ3BUSKLctNxdZznGBbUmABpuJvvW3DTTOenLCdS0WcNe0ND872hYDpAOP0bMx2uMgSQTEwZNuA47FjUFR3j/4gD0F3fd2jUkxCC+6O6dDrVBlvE7jx9iDxV01wIkGQvPujaJdTqAOc4mo7tOdJAEDUaaaBSMNUfTBp06rzeXFziQ07rbeA89inlHdIqrA9K9kCpcxdwsCd8bFYUsQ12jgfn6LCtqIiAiIgIiICIiDRjcR8Njn7gvP+mS2u7PRPa8TCbg7S07Quz6zf/GqRrFuYM/IFeSVcQ/wgE7RME8lcFmKwH57/wCyyZjj4WkjabD0VXh8VSfLahdTOw2twLTcjkpl27Q4bC24P4jzVVeYbGNe3K7TUR3mO3jcfmpNKsQQ14DtCPuujRzZ0cLW1HoTzzal5FiplPGWyuuPkd43FEW1Z5YARLmCIgv7EBkZ29sfZNuGak7SZ0tqNb2WFoABAjI2YbUaLU303D6uj4DqBxZHo4otuD+uKxqUW1I+HFN/3S4imYaIy6hplrbRGu8yG3FYlokkg6xIzGczstqlKdRQ8W7dLoFXpa/0MAaNvBAMxanWjR1HZ4DvGWJiG5CWuGQixmGkCLfcsGluh0p7SL64LiAZub950AkzYZxYOqW/hA22Df8AGq1dfiOGpH0roFyZADvC5445WjaIsMNgi3WXPG8ENDrxGbDn7WiL/wD2THcBwFJlJsuaw7SD8IkmXSJdTYTLvjt1+1naYrq2OLuywgDTZ2j2WyctUWJFF0bn73GAt6mPpt0yOA0n4WUNGY/ugb0KrhrYMibucdHxWnvlhjvfUiYDabyQGgXZ8Mnk0aQDDo1Tr2o1+00nPFqh8LnjmBazQpVIuEXeYt9sZA7BvJ8LmnmCbmSLgm03t25Zvm+rtfI+ez94NJ8hwUmlUAMggG4kZZBcQ13h++GnmfJQaZdoc/8AFHxf/G6O1vyuHmRtK3sqHbInXvACRkdq+0EA8iYuZVEsHboddmpM/d2OB9ZX2rXDabn3Aa3NYT2QdjREwcwj56LU2qNpHG435XeMxDoPCQLlbmmDN7Ezadey4d07cpjhwQDis7WikcrXNzF5se1pE6OnadLWX2iwNADYgWHavrtm+s+fMoX3k67dAbWMGRwPqsg489+saX32IuoAcd3y/XDhyWQxBH9/1/j3WGu4+m3fobi3ksXW4eZHncRwPruRU2n0o9ujj+uBUqn084d4A+x9lSuHD2mIt4do+VlqJ5eRi8aCeFxvEjRSI6zD9OU3ay08bj2VjTqhwlpB5GVwBPL1n9Wv+UBfaeKLTIdHI+eo4X5XskHoKLkcL1iqN73bHHX1/wA/KbvB9OUqhDZyuMAA7SdxUgs0RFByPXXHEFrGmIE23n8hHquFxFEOM6HeLe3+F0XWKo9tes1wkZyd9jcH0i6qBlOsjl/dVVXUw5dZwDx7rY0Ra49lZfsgOjh52RuEcNPYiPSVUQWlZ5lMOHdtpg/7Y/pha3UhtZHm4fOUGqnVIUhteVoLOHuSgagsRiQ5uWp22jTtFrh/K4GRy0UHE4BzTnp/StF7gGq3bduUlwmbg/aO0ssStlB5GhI5GPbRFSsNWFemMjtbG7zB7IkgYjeKLtNBU+8Yqq9NzTlcHgcQ8mCNbtdeCfNg3lW7Wtcczu8dXAN7Q0Ie2IcCCQZvBMEJiejhUgNh5AkOIpB2YgzmaKYMFwkwftqmkNRFK2xuADY+DvZpiTTE9vM3/wDWdTbdTfTgfVlsW+pgtDDwGtEkcqe7WGKhBykxv7V40ns1dwGz7N++0ulVdqM07pqRMl0WcRGYOG6C3YAFRKa9l8xYRfN9TfshrybaGmabuQGgspTH3vG3NGWfuP7tO/gf6TAEKHTeRH1hA0vWkgCbydSxx12tGp02ZyO9JA1nNfKId3qsXpkHgQSZOlFmys7U5uP1n8jr5WjcQdtyN6z+MPFG2Zi5bZwguJu2D8zdVTaom+UkT+7vDe1F3HtUodGsNvEwpVKoR94x/NctGtmtb2mHlMATCKsWvI/RuR/xF2+XovrXTpfSDrxaZg8RPNV9OoNGxNhq3mw2zHe2TxWw1htMWm+oaTrDyTZ28bggnB4Nv72ndfQ8EzRzv67dIJkX04qIa8a8bGwOxw7UTvmI1K+GuRtO4EixIuDfKDI3W2bEEp3vsmNdhvBki0eW9YzumNne01GwiQRHLhCitxAPd02RJEHS7QBYyLHfe601MXe5A3yaYgE5XWlxs6OFwL3Uglv9PS152t2O+a1l52A/lqRo06EEed9yhHG7CQJt3tCSWkCaf3wPM7LAxqmNaSNCbECabj4H2EAm+b57ool1cTrfTZcnQEWJB7roiNgncsq1bK4FvhM8SdZJ5qDRY5xEghgAN5EkRADHSRz/AELLAYE1qjG7C4Tx/wAa+Smo9KzosoRYFP1g6H+MMzR2wOWYbp2FcRisLldleMp3OGU/hK9QWrE4ZlRpbUa17TqHAEe6tHlhwu6fIygpEbfmu3xHU7Du7nxKRiBlebHfDpEqGephHdxLv9zGu+RCtwcsM2/3Wz4jxtKv6nVKuO7VpP5tcz5ZlX4jqtjnENaaFME3fmc7KODMok8JHNOCAartt+d1hm4D0Cs39B4lhLTSNSLZ2lga+3eDS6W8j7rU/o+qNaFXyYXf0yggGPuj3/NYfDbxb6Efgtteu1lnyz+dpb/UAoNbpmg2pTpl4mpZpkQTu5oqW1pHEbxf12hbAZXzJtB9EjePMfiNqBiGh4iq0PjQnvDk4X91Cd0VT8LnM5spPvbQ5QdWtN5uxu6FKe4jbw9Vg2og0N6OfMsFJ26DTaRcuHfpCIcXbT33HVbP2Z7Psy2IiGjKNrbspEACXM1gDiVIa7gtjKkeLL5/kiIdOodAXDSJ+IIuS2RLdstI/llfZHAaZScki/YMuc8yCS0mPFYKx/a3Rd2YcYcPfTzWp9adWs8m5fOWwZ4q0RTUttDYuO1ABN9crRldzMDivjMRr5kgb47QimIEg5hLiZKzyskfRtkaEl5Okal25bHPZaWUzGktBiOcpREGMgkAgOtuEnwuIbmdBAyy4+HRBXm4B0iQBmieOZ5c08B3tFNp4rLZsNGwNAaPYLJ2MJ8Tj5lWiERUcL0nuuZBaY1AcAaxAiYcLRDbArNuHqnVwZOvbkzBaYFNoFxDpzTJOi3PqwCTYaklYMrAxBBnSDM8oUujNuCb4nvceDntb4dgcT4Rt37zO1mVlmNA46uPNxv6qZhOha9XSmWje/sD0N/ZX2B6pNEGs8v/AIW9lvmdT7KUc1gsG6q6GtLjw0HM7F23Q3RAoiTd527BwH5qfh8O2mMrGho3AQFtUoIiKAiIgIiICIiAiIgLT+yU5zZGzpOUT6rciCqq9XMK77Bjf5JZ/RCiVeqNE911VnJ2b+sFdAiUcV0p/p+K7cn7XVptmSWNaKnk/Qc4WNbqfVZDaTm1GgAAvcW1LfehsE8bcgu3RWjz6p1bxA+xzcns/wCxC0v6CxA+wf6sPycvR0SjzUdD1/3FT0H5r67omv8AuKnoPzXpKJR5rh+rWNLC+pSY28MpteDUDd7zZk8A4razq1iT9iRzfT/BxK9FRKODpdUq52Um83OJ9mqdR6nO8dYDg1n4k/guuRKKCj1RoDv56vBzoHo0D3V1QwzGABjGtAAADQAABoBGxbUUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==" alt=""></td>
                <td>5</td>
                <td>15000</td>
                <td>sneakers</td>
                <!-- <router-link><div><i class="fas fa-edit"></i></div></router-link> | <router-link><i class="fas fa-trash-alt"></i></router-link> -->
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>Terminator</td>
                <td><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUREhMWFBUVFRcSFRgXFxgYGBIYFRYaFxcWGhUYHSggGhslHRUVITMhJSkrLi4uFx8zODMtNygtLysBCgoKDg0NFQ8PFSsZFRk3KystKy03Ky0rLS0rNzc3LS0tKysvLTcrLTctKystKysrNy0rKzctKystLSs3Ky0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAAcBAAAAAAAAAAAAAAAAAQIDBAUGCAf/xABFEAACAQIDBAcFAwoCCwAAAAAAAQIDEQQhMQUSQVEGBxMiYXGBMpHB0fChseEUM0JSYnKCkqKyVPEVFhcjNENTY5PC0v/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGg9KeluIp/llbDOmqOAdOnPfi5PE15yhvUk0+6oxnFXWblNcFnvqAiAAAAAAAADBdMOlFLZtFVqicnKShCCdnN6vPgks2/JcUTdF+lOH2jTVSjKzzUoSspxa1yvms1muaAzYAAAAAAAAAAAAAAAAAAAAAAAAAA8Gw/SHDRqxoV6ihSjtDGbTxerc5U60o4ekor2pOUYtx5RT0N1w/XBgZNXpV4xf6TjB2XO0Zt+67PCOlGHdPH4unL9HE1l5rtJNP1TT9SGGbcMtY3X2FHXVKopJSi01JKSa0aeaaJjy7qs6e4f8lhhsVVjSnS7kJTdozpr2e+8ouK7tnbJLxt6VhcbSqq9OpCa5wkpL3pkFcAAAYXpB0pwmBX+/rKMrXUF3qkv4Fnbxdl4nlfSjrerVLwwiWHjpvytOrLyWcYf1PxQGD60ukLxmOqJO9Og3h6a4Xg7VZebmmvFQiaxs3H1aElOlJxaaeXNaPweuequ7Foqvm2225Tzbbzb8/Mmle13Z+bX9v4AbdLprtDEP/jp0Jq26lbspJKzUks4y47zdtb21MlsTrSxlDE0o4+faU4b0anZKPf30lCUna0rPS275s1WpsenKjCtSrxfccpxn3LSgrzUHL2t1NZ/aYutS3VF1Y7sasFNSspNwlkpOKef3gdPbG6VYTFwpTp1Yp13ONOE2o1JOk++lC+dtcrqzT4ozRyLhdpTw9SGIoyUatPONRJXluu+807p6JZ3yZ6p0X64ZuvbaG5To7jhvUoSlaommqkkm2o7rknZPO3BsD2YFts/H0sRTVWhUhVhLSUJKUX6rj4FyAAAAAAAAAAAAAAAAAAMT0s2t+RYPEYnjSpTnFPjO1oL1k4r1A5k6dxf+kcXPvOM8RUnCUk1vJy4X4LRckkYijVlF3i7fEg8VUlBU5TlKKe8k3fvPJvMhSg5NRWraS8W9NQq8hjUtY2/d4+7IqRxUHxs/FIt8dgqtCW7VhKDel9JfuyWUvRsoqZUbFhtuYin+bxVWC/ZrVI/Ymi6rdOMc49m8ZXa/ZqSv/Mu9b1NTVuSJlPkBc18RObbbtd3ed22+LfMpKxTbFyKrKRPClGTu1drTO2uWnEoEd5cwLuVWm4dnVpSqRUnODhUVOcHJJSW9KE04vdi7buTjdNXd6WKqRtKSSgrJRiruySUYq75JJXeZdbMwNbENqnTdTdW9LNLdXNyk0uGj5ElSk4txd4ytnGSadn4PVFRjoruPxX2WsRdRxs+TivW6TfwK86bcWlZPXPwehSmt2Kvzt7s2BlOjW0auBrRxGHrTpNSi5Qi32dZRecZxvZp5rPS91mdK9GelWF2jHew9S8krypy7tSHnHl4q68Tluk8kirhMZOjUVSlOUJxd4yi3Fp+DRB10DxXo11xVYWhjKfapa1IWjU83HKMv6T1bYXSDDY6G/h6sZ846Th+9B5oDKAAAAAAAAAAAAABoXXfUUdkVrt51KCVuLVaErPwsn7kb6ed9eddw2fBpN3xEdLcKVWXHh3QOfsOqc1m3GSu76p+Flmn9mRNXwcoZtZPRrNPhqsjGJF1hcdUp6PLk9Hwd1o8sgMrgdt1qUezbVSm9adRb8X6PQuOwweI9iTwtT9Wb3qL8p+1D1y8DGwxNKp7S7OXOKy9Y/IoJlF5tDZNbD51Id3hOPeg/wCJZLXR2ZZIvtnbVrUPzc2lxi84vmnF5e4usVi8NWhJui6NZK6dK3ZzfKUH7Ov6PLjoBiQERCpo+LsuL1t42N9dStTxMMHSw0ZYV7kc6e9GpCSTnUlUta6vLXW3G5rOxMBSdOriMQpOlStFRi7OpOWkbrNWuv5lyMltPFNYOFXDVK1KlKboSpObkl3XK8ZN71u61a9s9FZ3Ixu2MXCGJk8NHsY026UXCT725Jrf3te9l7uJdU9vxqRVPFUo1IrJSikpR8bZLw7ri83ma+kTIK2KpsaNVSqYaoqkVeUoye7OKV2+87W5d5JftMwM6d+F+Kus1bkveQjzJKsr5LJcX8EEU+0tkvXwJorevbP/AC5E9Kkm7ci57JLP3gUI5alXDYypRnGrSlKFSL7sotxlG6adpRzV05LybJZUIy01fFMmjh3bNq5BumzOtfaVC0ZSp14/92Hety3oOPvdzZMH13PSrgvWFb/1lD4nk7oS8/vKTi0B7WuuzDf4Wv8AzU//AKLXFdd8V+bwUpfv1lH+2Ejx2xAD0jaPXNjqmVGjRo+LUqsvRtpe+LKeF6zdqqPaOUZxWu9RW7da3cLc1x4o0LCS3ZXWqzWSea8HkX2N2xVk0lOUUo7tlKWfNttttu714WWiSA9+6B9OKW04uO72deC3p073Uo6b8Hxjeya1Tavqm9tOTdmbTq4WpGvQm6dSDvGSs9VZpppppptWaOmOhu2njsFRxLSUpxamlpv05OnO3Jb0G0uTAzQAAGiddeBdXZVaUVd0pQreiluTfpCc36G9nnPXf0m/JMF+TRUXPFqdF3ecKe735JeqXqBziRsRUH9aCwELE0ZtcSBECrCouORVLVFSnO3xKKzIoMgFXLxlR01R3n2alv7uXtWavz4l1j9pqpRoUIxcY0k97O+/OTzl9/8AMzGkLgVETR+vEp3IVJ2T8vr4AT1a/Bevh4fX3ksZfX+f1kW8SeLIi6ovNP6V/sLzJrNmN3vr8S58fUCS/wBfXqTQfIknrf3fXyIp/P6Xu1AuoYm2v18tS4Uoy5P4GOv9fSz08iMG/r68GBd1MMuDsUJU2tcvrzKkKsrZa8/ly89fIoyXNgL8vr1KbZFsls34eLKqE6tjorqZi/8ARdNvSVSs4+XaNP8AqUjwno3sGrjq8KNGN23q9FbWcrfox1folm1fqDYey4YPD0sNTvu0oKCb1lbWT8W7t+LIi+AAFDH4pUaVSrJNxpwlUaWrUIuTt45HKPTbb2I2hi5V663W+7TgvZpwT7sYvj4vi75I60lFNWeaeT8TyPpz1XWTq4CKlHOUsPJ6eNGT0/db8nogPDalZQVmrvJ/ff4CNeEsvsL7aGy96Tim4Tj3ZQqXi4vlno/BllS2XUg96UH4cfXusol3FfQmnSStzef1cmnZJt6L7fDNFzVwU+yhXbj35bqhGTlUikrqUoxWS4a38EBadk+aHZvw9/4EuMnKNmstU8n4PikW9GvKTtfzAvoSeliDqW4MqUrLN5LX3DccZOMk007NNNNPxQEjqefuIdquZbVcY02raNr3Mq4epvq78gKymS13l6/X3E04KyJJSilm9fgBKmRTJI7ryi7srQpMCCkXeHndW5fHP5lrCFyeCaAuKul+X199ijvfX4fMnhZ5EsaMebAhv/X1qXcZRSV/q+f4eha2pppbzfhdfcXSlFfo+rb/AAQEHVbyS9xCdKS9rLz19xbYvaFWD3ILXSys34WjqZbopst169ClWvaVSLqJe12aleens91PN6XAw+JrbmbV+VtPebT1abIni8fQjVpqcVPtJwcd5KnGN32ieSjeys9W0rZm+Yrq2wU6+/RxE6FF+1T3d+cee5WnJuKeveUnm87WS9C6OYHBYGn2WGgoJ+09ZTa4yk83q/BXysBW6O9FsLs/tPyanu9o7u7ct1LSEW9IrN28TNFOFeMtGVCAAABo/Sytit5qnCTj4X+BvBK4IDnLpJsqvWlvVKT3v1rNStyvyNbWysRF2ipL3r7jq90VyKcsFTesIvzSA5Uxexq8knJN20LJ0ZRdqtNtLg7pXOt44CmtIRXkkiWrs6nPKUIyXJpP7wOSqnYSW64yXHKWnvZTpYehDNOfvj8jqyt0XwU/awtB+dKm/gUF0M2endYPDp81Sgn70gOXsXhZLdlGMrLNNriQSjUbnOVpPXu30SSz9Dqf/VjC6dhT9Yp/eWVfoFs6ecsJR9I7v9tgOXq+zacnftbX/Yb+JcYfB01aKlJ+h0l/s32X/hKf9XzLih0D2fD2MPCPlvfMDmaNV9n2LSXfclJpJpt/rapFDE7P31lOHrJ/I6hr9BNnz9rDU3/Dn79TH1eqzZUtcNbyq1o/dMDmvC7M3M3UhfTJv5FWqty2akmne1/A6Lj1UbKWlB+tWq/7psuJ9Wuz2rOldeb+AHNXYb8fairriy0jsmX68P5n8jpGp1P7Lk79nNeVWovs3iVdTmy/1av/AJZ/MDn2pDs1e8X5ZinCNSDUppX4Z3XJ8jo6j1W7Ngt1U214yu/e8wuqvZf/AEX/ADy+YHN2F2fThJPflJrRKKXxZsGBwl4yjKDtLnrlpnbJ8T3zD9Xmz6fs0rfxMvo9EsIv+X9r+YHgeF6PTm/zjUeSik/esvsNq2NsuOHVqcbN6v8ASl5v4Hq0OjGFWlP7X8yvDYWHWlNAaBQqSRe0XN6Jm8w2bSWkI+5FeNCK0igMDsShUveV7GxEEiIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==" alt=""></td>
                <td>5</td>
                <td>15000</td>
                <td>sneakers</td>
                <!-- <router-link><i class="fas fa-edit"></i></router-link> | <router-link><i class="fas fa-trash-alt"></i></router-link> -->
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>Zoo</td>
                <td><img src="https://www.platypusshoes.com.au/media/catalog/product/f/w/fw01655mw_wht_01.jpg" alt=""></td>
                <td>5</td>
                <td>15000</td>
                <td>sneakers</td>
                <!-- <router-link><i class="fas fa-edit"></i></router-link> | <router-link><i class="fas fa-trash-alt"></i></router-link> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>
<style>
  .table img{
      width: 200px;
  }
  .table{
      border: 0.2px solid lightgrey;
  }
  #tableProduct {
      margin: auto;
      width: 98%;
      overflow-y: scroll;
      overflow-x: hidden;
      box-shadow: 10px 10px 10px 0 grey;
      max-height: 550px;
  }
  ::-webkit-scrollbar {
      width: 5px;
  }

  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 1px;
  }

  ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 2px;
  }
</style>
