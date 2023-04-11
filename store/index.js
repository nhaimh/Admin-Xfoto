import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
    // eslint-disable-next-line import/no-named-as-default-member
    return new Vuex.Store({
        state: {
            Duans: [],
            DAimgae: [],
            DAi: {},

            SanPham: [],
            Anh: {},
            SanPhamDetail: [],

            Blog: [],
            Blo: {},
            token: '',
            user: {},
            isloading: false

        },
        mutations: {

            // Dự Án / Dự Án image
            // SET_TOKEN(state, data) {
            //     state.token = data
            // },
            GET_DUANS(state, Duans) {
                state.Duans = Duans
            },
            GET_I(state, DAimgae) {
                state.DAimgae = DAimgae
            },
            GET_DAI(state, DAi) {
                state.DAi = DAi
            },
            DELETE_I(state, id) {
                state.DAimgae = state.DAimgae.filter((DAimgae) => DAimgae.id !== id)
            },
            ADDI(state, duanimage) {
                state.DAimgae.unshift(duanimage)
            },
            UPDATEI(state, duanimage) {
                state.DAimgae.push(duanimage)
            },

            //Sản Phẩm
            GET_SP(state, SanPham) {
                state.SanPham = SanPham
            },
            GET_GIDAY(state, Anh) {
                state.Anh = Anh
            },
            GET_SPD(state, SanPhamDetail) {
                state.SanPhamDetail = SanPhamDetail
            },
            DELETE_D(state, id) {
                state.SanPhamDetail = state.SanPhamDetail.filter((SanPhamDetail) => SanPhamDetail.id !== id)
            },
            ADDD(state, sanphamdetail) {
                state.SanPhamDetail.unshift(sanphamdetail)
            },
            UPD(state, sanphamdetail) {
                state.SanPhamDetail.push(sanphamdetail)
            },

            //Blog
            GET_BLOG(state, Blog) {
                state.Blog = Blog
            },
            GET_BYIDBLOG(state, Blo) {
                state.Blo = Blo
            },
            DELETE_BV(state, id) {
                state.Blog = state.Blog.filter((Blo) => Blo.id !== id)
            },
            ADDBLOG(state, blog) {
                state.Blog.unshift(blog)
            },
            UPBLOG(state, blog) {
                state.Blog.push(blog)
            },

        },
        getters: {
            // isAuthenticated(state) {
            //     if (localStorage.getItem('token')) {
            //         return state.token = localStorage.getItem('token')
            //     }
            //     return state.token != null
            // },


            Duans(state) {
                return state.Duans
            },
            DAimgae(state) {
                return state.DAimgae
            },


            SanPham(state) {
                return state.SanPham
            },
            Anh(state) {
                return state.Anh
            },
            SanPhamDetail(state) {
                return state.SanPhamDetail
            },




            Blog(state) {
                return state.Blog
            },

            Blo(state) {
                return state.Blo
            },
            DAi(state) {
                return state.DAi
            }

        },
        actions: {
            async userLogin({ commit }, cccc) {
                const res = await axios.post(process.env.baseApiUrl + `Auth/login`, cccc)
                const output = res;
                this.$cookies.set('token', output.data);
                this.token = output.data;
            },
            userLogout() {
                this.token = '';
                this.$cookies.remove('token');

            },



            /// ****** Dự Án ******///
            async getDuans({ commit }) {
                try {
                    const response = await this.$axios.get(process.env.baseApiUrl + `DuAn`)
                    commit("GET_DUANS", response.data)
                } catch (err) {
                    console.log(err)
                }
            },
            async getImage({ commit }, params) {
                try {
                    const response = await this.$axios.post(process.env.baseApiUrl + `DuAn/getall`, params)
                    commit("GET_I", response.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async getByIDI({ commit }, id) {
                try {
                    const response = await this.$axios.get(process.env.baseApiUrl + `DuAn/DuAnImage/id?id=${id}`)
                    commit("GET_DAI", response.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async deleteI({ commit }, id) {
                try {
                    await this.$axios.delete(process.env.baseApiUrl + `DuAn/DuAnImage/id?id=${id}`);
                    commit("DELETE_I", id)
                } catch (error) {
                    console.log(error)
                }
            },
            async addI({ commit }, duanimage) {
                try {
                    await this.$axios.post(process.env.baseApiUrl + `DuAn/DuAnImage`, duanimage)
                    commit("ADDI", duanimage)
                } catch (error) {
                    console.log(error)
                }
            },
            async UpdateI({ commit }, duanimage) {
                try {
                    await this.$axios.put(process.env.baseApiUrl + `DuAn/DuAnImage`, duanimage)
                    commit("UPDATEI", duanimage)
                } catch (error) {
                    console.log(error)
                }
            },

            /// ****** Sản Phẩm ******///
            async getSanPham({ commit }) {
                try {
                    const response = await this.$axios.get(process.env.baseApiUrl + `SanPham`)
                    commit("GET_SP", response.data)
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.log(err)
                }
            },
            async getSPById({ commit }, id) {
                try {
                    const response = await this.$axios.get(process.env.baseApiUrl + `SanPham/detail/id?id=${id}`)
                    commit("GET_GIDAY", response.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async getSPd({ commit }, param) {
                try {
                    const response = await this.$axios.post(process.env.baseApiUrl + `SanPham/detail/getall`, param)
                    commit("GET_SPD", response.data)
                } catch (error) {
                    console.log(error)
                }
            },
            async deleteD({ commit }, id) {
                try {
                    await this.$axios.delete(process.env.baseApiUrl + `SanPham/detail?id=${id}`);
                    commit("DELETE_D", id)
                } catch (error) {
                    console.log(error)
                }
            },
            async addD({ commit }, sanphamdetail) {
                try {
                    await this.$axios.post(process.env.baseApiUrl + `SanPham/detail`, sanphamdetail)
                    commit("ADDD", sanphamdetail)
                } catch (error) {
                    console.log(error)
                }
            },
            async UpdateD({ commit }, sanphamdetail) {
                try {
                    await this.$axios.put(process.env.baseApiUrl + `SanPham/detail`, sanphamdetail)
                    commit("UPD", sanphamdetail)
                } catch (error) {
                    console.log(error)
                }
            },

            //******** Blog **********/
            async getBlog({ commit }, params) {
                try {
                    const response = await this.$axios.post(process.env.baseApiUrl + `Blog/getall`, params)
                    commit("GET_BLOG", response.data)

                } catch (err) {
                    console.log(err)
                }
            },
            async getByIdBlog({ commit }, id) {
                try {
                    const response = await this.$axios.get(process.env.baseApiUrl + `Blog/get/id?id=${id}`)
                    commit("GET_BYIDBLOG", response.data)
                } catch (err) {
                    console.log(err)
                }
            },
            async deleteBlog({ commit }, id) {
                try {
                    await this.$axios.delete(process.env.baseApiUrl + `Blog/id?id=${id}`);
                    commit("DELETE_BV", id)
                } catch (error) {
                    console.log(error)
                }
            },
            async addBlog({ commit }, blog) {
                try {
                    await this.$axios.post(process.env.baseApiUrl + `Blog`, blog)
                    commit("ADDBLOG", blog)
                } catch (error) {
                    console.log(error)
                }
            },
            async UpdateBlog({ commit }, blog) {
                try {
                    await this.$axios.put(process.env.baseApiUrl + `Blog`, blog)
                    commit("UPBLOG", blog)
                } catch (error) {
                    console.log(error)
                }
            }
        }
    })
}
export default createStore 