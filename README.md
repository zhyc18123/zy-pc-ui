# 表格使用
    <zy-table :table="dataTable"></zy-table>

    data() {
       return {
           dataTable: {
                tr: [// 表格行数据
                    {
                    label: '用户名',
                    prop: 'username',
                    className: 'username',
                    align:'center'
                    },
                    {
                    label: '手机号',
                    prop: 'phone',
                    className: 'phone',
                    align:'center'
                    },
                ],       
                data: [
                    {
                        username:'testName',
                        phone:'13898848774'
                    }
                ]   // 表格内容数据
           }
       }
    }
    此组件封装了element-ui中table组件的部分功能，列举如下(table数据参数为'table')

    1、复选框功能 ：table.hasSelect；默认为false，false为无，true为有，当为true时，通过监听自定义事   件'onHandleSelectionChange'并传参来执行复选框更改选中项后的回调函数

    2、表格折行功能：table.hasExpand；默认为false，false为无，true为有，当为true时，需要设置   table.expands，里面是需要折行显示的数据
              expands: [
            {
              id: '1',
              label: '收款人姓名：',
              prop: 'gather_name'
            },
            {
              id: '2',
              label: '银行卡号：',
              prop: 'bank_card'
            },
            {
              id: '3',
              label: '户行：',
              prop: 'bank'
            }
          ]

    3、按钮列功能：table.hasOperation；默认为false，false为无，true为有，当为true时，需要设置table.operation，里面是按钮属性数据
    operation: {             // 操作功能
            label: '操作',                // 操作列的行首文字
            width: '80',                // 操作列的宽度
            className: '',               // 操作列的class名
            data: [                      // 操作列数据
              {
                label: '删除',                // 按钮文字
                Fun: 'handleDelete',         // 点击按钮后触发的父组件事件
                size: 'mini',                // 按钮大小
                id: '1'                     // 按钮循环组件的key值
              }
            ]
          }
          只需监听'handleDelete'事件即可执行按钮回调函数，label是按钮名称，size是element-ui中button组件控制按钮大小的属性

    4、自定义列功能：table.tr[index].show；默认为true，show有三个值，true时，是普通表格列展示，false时，此列不展示，template时是自定义列。为template时，使用如下例：
    <zy-table :table="dataList" @onHandleSelectionChange="handleSelectionChange" @handleSync="handleSync" @handleoperate="handleoperate">
      <template slot-scope="props" slot="username">
        <a class="template-username" :href="'/#/bombscreen?mobile=' + props.obj.row.id" target="_blank">{{ props.obj.row.username }}</a>
      </template>
    </zy-table>

    5、表位合计行：hasShowSummary：默认为false，false为无，true为有，当为true时，需要设置table.getSummaries属性，此属性值为函数，可传一个参数，参数为当前表格的列组成的数组，此属性最中return一个数组，即为合计行最终显示的数据，使用例子如下
    data() {
     return {
         dataTable: {
              tr: [],
              data: [],
              hasShowSummary: true,
              getSummaries() {
                   return ['合计', 'N/A', '2', '41']
              }
         }
     }
    }

    6、点击表格行事件：在父组件监听rowClick事件即可，此函数接受一个参数，包含三个属性，分别是：row：当前点击行数据，column：当前点击单元格所在列的列数据，event：原生事件对象。使用例子如下
    <zy-table :table="dataTable" @onRowClick="rowClick"></zy-table>
    
    7、自定义行类名，列类名：在table.tr中设置的className为列类名，在table.data中设置的class为行类 名，行类名的class是一个数组，列类名的className是一个字符串，通过这两个类名，可实现表格中单独某些单元    格样式或功能的调整，注意：行类名可在通过ajax获取表格数据成功后的回调函数中去赋值。
    8、自定义列宽度，最小宽度：width，minWidth；直接写字符串形式的数字即可，不需要单位

    9、加载动画：loading；默认为false，false时为无，true时为有

    10、自定义表格边框：border；默认为false，false是为无，true时为有

    11、合并单元格：hasMergeRowOrColumn；默认为false，false时为无，true时为有，当为true时，还需要监 听自定义事件'onMergeRowOrColumn'，此方法接受一个参数，包含四个属性row，column，rowIndex，  columnIndex
