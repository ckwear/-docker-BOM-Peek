<template>
	<div id="wrap">
		<section>
			<div id="Nav_title" class="m_hidden">
				<h1>Dashboard</h1>
			</div>
			<div id="lite_typeMain">
				<div class="current_stat">
					<div class="current_time m_hidden">
						<p class="date">{{nowDate}} {{nowDay}}</p>
						<p class="time">{{nowTime2}}</p>
					</div>
					<div v-if="warning.Value === 0">
						<div class="caution_box widget_box g_bg">
							<p>현재</p>
							<p>경고상태는</p>
							<p><span>정상</span>입니다.</p>
							<p class="time m_show">{{nowTime}}</p>
						</div>
					</div>
					<div v-if="warning.Value === 1">
						<div class="caution_box widget_box y_bg">
							<p>현재</p>
							<p>경고상태는</p>
							<p><span>1단계</span>입니다.</p>
							<p class="time m_show">{{nowTime}}</p>
						</div>
					</div>
					<div v-else-if="warning.Value === 2">
						<div class="caution_box widget_box o_bg">
							<p>현재</p>
							<p>경고상태는</p>
							<p><span>2단계</span>입니다.</p>
							<p class="time m_show">{{nowTime}}</p>
						</div>
					</div>
					<div v-else-if="warning.Value === 3">
						<div class="caution_box widget_box r_bg">
							<p>현재</p>
							<p>경고상태는</p>
							<p><span>3단계</span>입니다.</p>
							<p class="time m_show">{{nowTime}}</p>
						</div>
					</div>
					<div v-if="warning.Value != 0 && warning.Value != 1 && warning.Value != 2 && warning.Value != 3   ">
						<div class="caution_box widget_box gray_bg">
							<p>현재</p>
							<p>경고상태를</p>
							<p><span>분석 중</span>입니다.</p>
							<p class="time m_show">{{nowTime}}</p>
						</div>
					</div>
					<div class="demand_time widget_box m_hidden">
						<h4>수요시한</h4>
						<h2>{{demandTime}}</h2>
					</div>
				</div>
				<div class="statusList">
					<div ng-switch on="role">
						<div class="item widget-type1">
							<div class="ibox widget_box">
								<h4>목표전력</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_User_Peak') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_User_Peak') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<h2 class="no-margins">{{tagVal | pickValue('kW_Target*00M', role) | numberFormat(0) }} <span>kW</span></h2>
							</div>
						</div>
						<div class="item widget-type1">
							<div class="ibox widget_box">
								<h4>예측전력</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_Pdc') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_Pdc') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<h2 class="no-margins">{{tagVal | pickValue('kW_Pre*00M', role) | numberFormat(0) }} <span>kW</span></h2>
							</div>
						</div>

						<div class="item widget-type1">
							<div class="ibox widget_box">
								<h4>현재전력</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_Now_MD') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_Now_MD') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<h2 class="no-margins">{{tagVal | pickValue('kW_Current*00M', role) | numberFormat(0) }} <span>kW</span></h2>
							</div>
						</div>
						<div class="item widget-type1">
							<div class="ibox widget_box">
								<h4>기준전력</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_Base') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_Base') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<h2 class="no-margins">{{tagVal | pickValue('kW_Base*00M', role) | numberFormat(0) }} <span>kW</span></h2>
							</div>
						</div>

						<div class="item widget-type2">
							<div class="ibox widget_box">
								<h4>직전최대피크</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_Peak_Before_M') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_Peak_Before_M') | numberFormat(0) }} kW</h2>
								</div>

								<h2>{{tagVal | pickValue('Peak_B*00M', role) | numberFormat(0) }}<span
										class="unit">kW</span></h2>
							</div>
						</div>
						<div class="item widget-type2">
							<div class="ibox widget_box">
								<h4>일 최대피크</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_Peak_Day') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_Peak_Day') | numberFormat(0) }} <span>kW</span></h2>
								</div>

								<h2>{{tagVal | pickValue('Peak_D*00M', role) | numberFormat(0) }}<span
										class="unit">kW</span></h2>
							</div>
						</div>
						<div class="item widget-type2">
							<div class="ibox widget_box">
								<h4>월 최대피크</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_Peak_Mon') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_Peak_Mon') | numberFormat(0) }} <span>kW</span></h2>
								</div>

								<h2>{{tagVal | pickValue('Peak_M*00M', role) | numberFormat(0) }}
									<span class="unit">kW</span></h2>
							</div>
						</div>
						<div class="item widget-type2">
							<div class="ibox widget_box">
								<h4>연 최대피크</h4>
								<div v-if="role ==='ROLE_PL1'">
									<h2>{{tagVal | pickValue('PL1_kW_Peak_Year') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<div v-if="role ==='ROLE_PL2'">
									<h2 class="no-margins">{{tagVal | pickValue('PL2_kW_Peak_Year') | numberFormat(0) }} <span>kW</span></h2>
								</div>
								<h2 class="no-margins">{{tagVal | pickValue('Peak_Y*00M',role) | numberFormat(0) }} <span>kW</span></h2>
							</div>
						</div>
					</div>
				</div>
				<div class="demanad_time_wrap m_show">
					<div class="demand_time widget_box">
						<h4>수요시한</h4>
						<h2>{{demandTime}}</h2>
					</div>
				</div>
			</div>
		</section>
		<div v-show="tagVal < 0">
			<div class="loading">
				<img src="~assets/images/Lite/loading.gif" alt="loading" />
				<p>서버와의 연결이 끊어졌습니다. </p>
				<p>연결 재시도 중입니다.</p>
			</div>
		</div>
	</div>
</template>
<script>
	import moment from 'moment';
	import axios from 'axios';

	export default {
		fetch ({ store, redirect }) {
			if (!store.state.authUser) {
				return redirect('/')
			}
		},
		layout: 'template',
		components : {
			moment,
			axios
		},
		data() {
			return {
				role:'',//사용자롤
				userInfo:'',//사용자정보
				id: '', //사용자 아이디 저장
				tagVal: [], //Web-Access tag 정보저장
				warning: '',
				week: ["MON", "TUE", "WED", "THU", "FRI", "SAT" , "SUN"],
				nowDate: moment(new Date()).format('YYYY-MM-DD'),
				nowDay : moment(new Date()).day()-1,
				nowTime: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),//현재시간
				nowTime2: moment(new Date()).format('HH:mm:ss'),//현재시간
				interval:null, //인터벌함수(tag 가져옴)
				demandTime : '..연결중',//수요시간,
			}
		},
		created() {
			this.id = this.$store.getters.ID;
			this.role = this.$store.getters.Role;
			console.log(this.role);
		},
		mounted() {
			document.body.className = '';
			this.WaLogin();
			this.getTagValues();
			this.nowDay = this.week[this.nowDay];
			this.resetInterval();

		},
		filters: {
			numberFormat(target, limit) {
				if(target == undefined) {
					return 0
				}else {
					if(typeof target === 'number') {
						var number = Number(target).toFixed(limit);
						return number
					}else {
						return 0
					}
				}
			},
			pickValue(object, key, role) {
				key = role + '_' + key;
				if (object === undefined || object === null || object === "") {
					return "응답대기중"
				} else {
					let target = object.filter(object => object.Name === key)
					if (target.length === 0) {
						return -1
					} else {
						return target[0].Value
					}
				}
			}
		},
		destroyed() {
			this.removeInterval()
		},
		methods: {
			//WaLogin
			WaLogin: async function() {
				axios.get('/api/WaLogin')
						.then(function (res) {
							console.log("로그인 성공");
							console.log(res);
						}).catch(function (error) {
					console.log("Login실패");
					console.log(error)
				})
			},
			//WEBACCESS Tag값 가져오기
			getTagValues: async function() {
				var vm = this;
				axios({
					method: 'post',
					url : '/api/getTagValues',
					params : {
						role:vm.role
					}
				}).then(function(res) {
					console.log(res.data);
					if(res.data.Result['Total'] > 0) {
						var temp = res.data.Values;
						vm.tagVal = temp
					}else {
						console.log("Webaccess 정보가져오기 실패")
					}
				}).catch(function(error) {
							console.log("api/getTagValues 에러발생/Dashboard 호출")
							console.log(error)
						});
			},
			deviceStatus: function() {
				var vm = this;
				var temp = vm.tagVal
				var warningStat ="";
				if(vm.role === "ROLE_PL1"){
					warningStat = temp.filter(temp => temp.Name == 'PL1_STA_Warning')
				}else if(vm.role === "ROLE_PL2") {
					warningStat = temp.filter(temp => temp.Name == 'PL2_STA_Warning')
				}else {
					warningStat = temp.filter(temp => temp.Name == vm.role + '_W_Status*00M')
				}

				if(warningStat.length === 0) {
					this.warning = -1
				}else {
					this.warning = warningStat[0];
				}
			},
			getNowTime: function() {
				this.nowTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
				this.nowTime2 = moment(new Date()).format('HH:mm:ss');
			},
			getdemandTime: function() {
				var vm = this;
				var temp = this.tagVal
				var demand ="";
				if(vm.role === "ROLE_PL1"){
					demand = temp.filter(temp => temp.Name == 'PL1_Dmd_Time_S');
				}else if(vm.role === "ROLE_PL2") {
					demand = temp.filter(temp => temp.Name == 'PL2_Dmd_Time_S');
				}else {
					demand = temp.filter(temp => temp.Name == vm.role + '_Past_Time*00M');
				}
				if(demand.length === 0) {
					this.warning = '연결대기중'
				}else {
					var d = new Date(1970,0,1).setSeconds(demand[0].Value);
					if(demand == null || demand === '' || demand === undefined) {
						this.demandTime = '연결중..';
					}else {
						this.demandTime = moment(d).format('mm:ss');
					}
					this.demandPercent = ((900 - demand[0].Value)/900) * 100;
				}
			},

			//Interval 시작
			resetInterval : function() {
				var vm = this;
				clearInterval(this.interval);
				this.interval = setInterval(function() {
					vm.getNowTime();
					vm.getTagValues();
					//vm.getTagValues2();
					if(vm.tagVal != "" || vm.tagVal != null ) {
						vm.getdemandTime();
						vm.deviceStatus();
					}
				},1000);
			},
			//인터벌삭제
			removeInterval: function() {
				clearInterval(this.interval);
			},
			logout : async function() {
				axios.get('/api/user/logout');
				this.$router.push('/');
			}
		}
	}
</script>

