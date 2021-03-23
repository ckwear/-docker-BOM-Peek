<template>
	<div id="wrap">
    <section>
			<div id="Nav_title" class="m_hidden">
				<h1>Alarm</h1>
			</div>
      <div class="alert_content">
        <div class="alarm-box">
          <dx-data-grid :data-source="lists" :show-borders="true" :allow-column-reordering="true" :allow-column-resizing="true">
            <dx-column-chooser :enabled="true" mode="select"/>
            <dx-column data-field="No" alignment="center" :hiding-priority="0" :width="80" />
            <dx-column data-field="단계" alignment="center"/>
            <dx-column data-field="내용"/>
            <dx-column data-field="상태"/>
            <dx-column data-field="요일" alignment="center" :hiding-priority="1"/>
            <dx-column data-field="날짜 및 시간" alignment="center" data-type="date" format="yyyy-MM-dd HH:mm:ss" sort-order="desc"/>
            <dx-header-filter :visible="true"/>
            <dx-filter-row :visible="true"/>
            <dx-export :enabled="true" :allow-export-selected-data="true" file-name="alert"/>
            <dx-pager :show-page-size-selector="true" :allowed-page-sizes="pageSizes" :show-info="true"/> -->
          </dx-data-grid>
        </div>
      </div>
    </section> 
	</div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import {DxDataGrid,DxFilterRow,DxHeaderFilter,DxPager,DxPaging,DxSummary,DxColumn,DxSearchPanel,DxExport,DxColumnChooser} from 'devextreme-vue/data-grid';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';

export default {
  fetch ({ store, redirect }) {
    if (!store.state.authUser) {
      return redirect('/')
    }
  },
  layout: 'template', 
  components : {
    moment,
    axios,
    DxDataGrid,DxFilterRow,DxHeaderFilter,DxPager,DxPaging,DxSummary,DxColumn,DxSearchPanel,DxExport,DxColumnChooser
  },
  data () {
    return {
      id:'',
      lists: [],
      pageSizes: [5, 10, 20]
    }
  },
  created() {
    this.id = this.$store.getters.ID;
    this.role = this.$store.getters.Role;
    console.log("this.id : " + this.id)
    console.log("this.role : " + this.role)
  },
  mounted() {
    this.getAlarm()
  },
  methods: {
    getAlarm: async function() {
      var vm = this;
      axios({
            method: 'get',
            url : '/api/getAlarm',
            params : {
              id:vm.id
            }
      }).then((res)=> {
        if(res.data.code === 1) {
          vm.lists = res.data.value
          console.log(vm.lists)
        }
      })
      .catch((err)=> {
        console.log("SearchAlert 에러 발생");
        console.log(err);
      })
    }
  }
}
</script>
<style>
.dx-datagrid, .dx-toolbar {font-size:14px;}
  /**반응형코딩**/
  @media screen and (max-width:767px) {
    .dx-datagrid, .dx-toolbar {font-size:1em;}
  }
</style>
